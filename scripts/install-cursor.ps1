#Requires -Version 5.1
<#
.SYNOPSIS
  Downloads the latest stable Cursor for Windows from Cursor's update API and runs the installer.

.PARAMETER Scope
  user  = per-user install (default, no admin)
  system = machine-wide install (requires elevation)

.PARAMETER DryRun
  Only resolve and print the download URL; do not download or install.
#>
param(
    [ValidateSet('user', 'system')]
    [string]$Scope = 'user',

    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

function Get-WindowsGoldenSlug {
    $proc = $env:PROCESSOR_ARCHITECTURE
    $isArm = ($proc -eq 'ARM64')
    if ($Scope -eq 'user') {
        if ($isArm) { return 'win32-arm64-user' }
        return 'win32-x64-user'
    }
    if ($isArm) { return 'win32-arm64' }
    return 'win32-x64'
}

function Save-FileWithProgress {
    param(
        [string]$Uri,
        [string]$Path
    )
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    }
    catch { }

    $req = [System.Net.HttpWebRequest]::Create($Uri)
    $req.Method = 'GET'
    $req.AllowAutoRedirect = $true
    $resp = $req.GetResponse()
    try {
        $len = [int64]$resp.ContentLength
        $in = $resp.GetResponseStream()
        $out = [System.IO.File]::Create($Path)
        try {
            $buf = New-Object byte[] 65536
            $done = [int64]0
            $ui = [System.Diagnostics.Stopwatch]::StartNew()
            while (($n = $in.Read($buf, 0, $buf.Length)) -gt 0) {
                $out.Write($buf, 0, $n)
                $done += $n
                if ($ui.ElapsedMilliseconds -lt 250) {
                    continue
                }
                $ui.Restart()
                if ($len -gt 0) {
                    $pct = [int](100L * $done / $len)
                    $status = '{0:N1} / {1:N1} MB' -f ($done / 1MB), ($len / 1MB)
                    Write-Progress -Activity 'Downloading Cursor' -Status $status -PercentComplete $pct
                }
                else {
                    $status = '{0:N1} MB downloaded' -f ($done / 1MB)
                    Write-Progress -Activity 'Downloading Cursor' -Status $status -PercentComplete -1
                }
            }
            if ($len -gt 0) {
                Write-Progress -Activity 'Downloading Cursor' `
                    -Status ('{0:N1} / {1:N1} MB' -f ($done / 1MB), ($len / 1MB)) -PercentComplete 100
            }
        }
        finally {
            $out.Close()
            $in.Close()
        }
    }
    finally {
        $resp.Dispose()
        Write-Progress -Activity 'Downloading Cursor' -Completed
    }
}

function Resolve-DownloadUrl {
    param([string]$Slug)
    $api = "https://api2.cursor.sh/updates/download/golden/$Slug/cursor/latest"
    $req = [System.Net.HttpWebRequest]::Create($api)
    $req.Method = 'HEAD'
    $req.AllowAutoRedirect = $false
    $resp = $req.GetResponse()
    try {
        if ($resp.StatusCode -ne [System.Net.HttpStatusCode]::Redirect -and
            $resp.StatusCode -ne [System.Net.HttpStatusCode]::MovedPermanently -and
            $resp.StatusCode -ne [System.Net.HttpStatusCode]::RedirectKeepVerb) {
            throw "Unexpected status $($resp.StatusCode) from $api"
        }
        $loc = $resp.Headers['Location']
        if (-not $loc) { throw "No Location header from $api" }
        return $loc
    }
    finally {
        $resp.Dispose()
    }
}

$slug = Get-WindowsGoldenSlug
$url = Resolve-DownloadUrl -Slug $slug
Write-Host "Resolved: $url"

if ($DryRun) { exit 0 }

$tmp = Join-Path $env:TEMP ("CursorSetup-" + [Guid]::NewGuid().ToString('n') + '.exe')
Write-Host "Downloading to $tmp ..."

$curlExe = Get-Command curl.exe -All -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandType -eq 'Application' } |
    Select-Object -First 1
try {
    if ($curlExe) {
        $curlArgs = @(
            '-fSL', '--progress-bar',
            '--retry', '3', '--retry-delay', '2',
            '-o', $tmp, $url
        )
        & $curlExe.Source @curlArgs
        if ($LASTEXITCODE -ne 0) {
            throw "curl.exe exited with code $LASTEXITCODE"
        }
    }
    else {
        Save-FileWithProgress -Uri $url -Path $tmp
    }
}
catch {
    Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
    throw
}

$args = @('/VERYSILENT', '/NORESTART', '/SUPPRESSMSGBOXES')
Write-Host "Starting installer (Inno Setup silent) ..."
$p = Start-Process -FilePath $tmp -ArgumentList $args -PassThru -Wait
if ($p.ExitCode -ne 0) {
    Write-Warning "Installer exit code: $($p.ExitCode)"
}
Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
Write-Host "Done."
