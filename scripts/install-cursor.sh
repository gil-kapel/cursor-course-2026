#!/usr/bin/env bash
# Downloads the latest stable Cursor from Cursor's official update API and installs it.
# macOS: mounts the .dmg and copies Cursor.app to /Applications (requires write access).
# Linux: picks .deb / .rpm / AppImage from your package manager when possible.
# Windows (Git Bash / MSYS): delegates to install-cursor.ps1 via powershell.exe.
#
# Environment:
#   CURSOR_INSTALL_DRY_RUN=1   print resolved URL and exit
#   CURSOR_INSTALL_SCOPE       windows only: user (default) or system — passed to PowerShell

set -euo pipefail

readonly API_BASE='https://api2.cursor.sh/updates/download/golden'

die() {
  printf '%s\n' "$*" >&2
  exit 1
}

have() {
  command -v "$1" >/dev/null 2>&1
}

download() {
  local url=$1 dest=$2
  if have curl; then
    if [[ -t 2 ]]; then
      echo 'Downloading (progress on stderr) ...' >&2
      curl -fL --progress-bar --retry 3 --retry-delay 2 -o "$dest" -- "$url"
      printf '\n' >&2
    else
      curl -fsSL --retry 3 --retry-delay 2 -o "$dest" -- "$url"
    fi
  elif have wget; then
    if [[ -t 2 ]]; then
      echo 'Downloading ...' >&2
      wget --show-progress -O "$dest" "$url" 2>/dev/null || wget -O "$dest" "$url"
    else
      wget -q -O "$dest" "$url"
    fi
  else
    die 'Need curl or wget to download.'
  fi
}

resolve_redirect_url() {
  local url=$1
  if have curl; then
    curl -fsSIL --retry 3 --retry-delay 2 -o /dev/null -w '%{url_effective}' -- "$url"
  else
    die 'curl is required to resolve the download URL (install curl or use install-cursor.ps1 on Windows).'
  fi
}

linux_arch_slug() {
  case "$(uname -m)" in
    x86_64 | amd64) echo x64 ;;
    aarch64 | arm64) echo arm64 ;;
    *) die "Unsupported Linux machine: $(uname -m)" ;;
  esac
}

linux_golden_slug() {
  local arch
  arch=$(linux_arch_slug)
  if have apt-get || have dpkg; then
    echo "linux-${arch}-deb"
    return
  fi
  if have dnf || have yum || have zypper || have rpm; then
    echo "linux-${arch}-rpm"
    return
  fi
  echo "linux-${arch}"
}

install_macos_dmg() {
  local dmg=$1
  local mount
  mount=$(mktemp -d "${TMPDIR:-/tmp}/cursor-dmg.XXXXXX")
  cleanup() {
    hdiutil detach "$mount" -quiet >/dev/null 2>&1 || true
    rmdir "$mount" 2>/dev/null || true
  }
  trap cleanup EXIT

  hdiutil attach -nobrowse -mountpoint "$mount" "$dmg"
  if [[ ! -d "$mount/Cursor.app" ]]; then
    die "Cursor.app not found inside DMG (unexpected layout)."
  fi
  echo "Copying Cursor.app -> /Applications ..."
  if [[ -w /Applications ]]; then
    rm -rf /Applications/Cursor.app
    cp -R "$mount/Cursor.app" /Applications/
  else
    sudo rm -rf /Applications/Cursor.app
    sudo cp -R "$mount/Cursor.app" /Applications/
  fi
  trap - EXIT
  cleanup
  echo "Installed to /Applications/Cursor.app"
}

install_linux_deb() {
  local deb=$1
  if have apt-get; then
    echo "Installing with apt (may prompt for sudo password) ..."
    sudo apt-get install -y "$deb"
  else
    echo "Installing with dpkg (may prompt for sudo password) ..."
    sudo dpkg -i "$deb" || sudo apt-get install -f -y
  fi
}

install_linux_rpm() {
  local rpm=$1
  if have dnf; then
    echo "Installing with dnf (may prompt for sudo password) ..."
    sudo dnf install -y "$rpm"
  elif have yum; then
    echo "Installing with yum (may prompt for sudo password) ..."
    sudo yum install -y "$rpm"
  elif have zypper; then
    echo "Installing with zypper (may prompt for sudo password) ..."
    sudo zypper --non-interactive install "$rpm"
  else
    echo "Installing with rpm (may prompt for sudo password) ..."
    sudo rpm -Uvh "$rpm"
  fi
}

install_linux_appimage() {
  local appimage=$1
  local dest="$HOME/.local/bin/cursor.appimage"
  mkdir -p "$HOME/.local/bin"
  chmod +x "$appimage"
  mv -f "$appimage" "$dest"
  echo "Installed AppImage to $dest"
  echo "Run: $dest"
}

run_windows_powershell() {
  local scope=${CURSOR_INSTALL_SCOPE:-user}
  local here
  here=$(cd "$(dirname "$0")" && pwd)
  local ps1="$here/install-cursor.ps1"
  [[ -f "$ps1" ]] || die "Missing companion script: $ps1"

  if ! have powershell.exe && ! have pwsh; then
    die 'On Windows, run scripts/install-cursor.ps1 in PowerShell, or install PowerShell and retry.'
  fi

  local ps=(powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$ps1" -Scope "$scope")
  if [[ "${CURSOR_INSTALL_DRY_RUN:-}" == 1 ]]; then
    ps+=( -DryRun )
  fi
  exec "${ps[@]}"
}

main() {
  local os
  os=$(uname -s)

  case "$os" in
    CYGWIN* | MINGW* | MSYS*)
      run_windows_powershell
      ;;
  esac

  local slug tmp resolved ext
  case "$os" in
    Darwin)
      slug='darwin-universal'
      ext=dmg
      ;;
    Linux)
      slug=$(linux_golden_slug)
      case "$slug" in
        *-deb) ext=deb ;;
        *-rpm) ext=rpm ;;
        *) ext=AppImage ;;
      esac
      ;;
    *)
      die "Unsupported OS: $os (use scripts/install-cursor.ps1 on Windows PowerShell)."
      ;;
  esac

  tmp=$(mktemp "${TMPDIR:-/tmp}/cursor-install.XXXXXX")
  resolved=$(resolve_redirect_url "$API_BASE/$slug/cursor/latest")
  printf 'Resolved download:\n%s\n' "$resolved"

  if [[ "${CURSOR_INSTALL_DRY_RUN:-}" == 1 ]]; then
    rm -f "$tmp"
    exit 0
  fi

  trap 'rm -f "$tmp"' EXIT
  download "$resolved" "$tmp"
  mv -f "$tmp" "$tmp.$ext"
  tmp="$tmp.$ext"
  trap 'rm -f "$tmp"' EXIT

  case "$os" in
    Darwin)
      install_macos_dmg "$tmp"
      ;;
    Linux)
      case "$slug" in
        *-deb) install_linux_deb "$tmp" ;;
        *-rpm) install_linux_rpm "$tmp" ;;
        *) install_linux_appimage "$tmp" ;;
      esac
      ;;
  esac

  rm -f "$tmp"
  trap - EXIT
}

main "$@"
