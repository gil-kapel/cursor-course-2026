export type ClientPlatform =
  | 'mac'
  | 'windows'
  | 'linux'
  | 'ios'
  | 'android'
  | 'unknown';

/** For macOS Cursor builds: Apple Silicon vs Intel. */
export type MacCpuKind = 'arm' | 'x86' | null;
