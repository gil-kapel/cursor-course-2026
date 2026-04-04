export type ClientPlatform =
  | 'mac'
  | 'windows'
  | 'linux'
  | 'ios'
  | 'android'
  | 'unknown';

/** Apple Silicon vs Intel; ARM64 vs x64 on Windows / Linux. */
export type DesktopCpuArch = 'arm' | 'x86';

/** @deprecated Prefer DesktopCpuArch | null */
export type MacCpuKind = DesktopCpuArch | null;
