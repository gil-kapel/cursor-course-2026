/**
 * Direct Cursor installer URLs (golden channel). Version can be overridden at build time.
 * Fallback: https://cursor.com/download
 * @see https://cursor.com/docs/downloads
 */

import type { ClientPlatform, MacCpuKind } from '@/lib/platformTypes';

export type { MacCpuKind };

export const CURSOR_DOWNLOAD_FALLBACK = 'https://cursor.com/download';

/** Default matches common stable builds; override with NEXT_PUBLIC_CURSOR_VERSION. */
function cursorVersion(): string {
  return process.env.NEXT_PUBLIC_CURSOR_VERSION?.trim() || '2.6';
}

export function getCursorDirectDownloadUrl(
  platform: ClientPlatform,
  macCpu: MacCpuKind,
): string {
  const v = cursorVersion();

  switch (platform) {
    case 'mac':
      if (macCpu === 'x86') {
        return `https://api2.cursor.sh/updates/download/golden/darwin-x64/cursor/${v}`;
      }
      /* Default Apple Silicon when unknown (majority of new Macs). */
      return `https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/${v}`;
    case 'windows':
      return `https://api2.cursor.sh/updates/download/golden/win32-x64-user/cursor/${v}`;
    case 'linux':
      return `https://api2.cursor.sh/updates/download/golden/linux-x64/cursor/${v}`;
    case 'ios':
    case 'android':
    case 'unknown':
    default:
      return CURSOR_DOWNLOAD_FALLBACK;
  }
}
