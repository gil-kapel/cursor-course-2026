'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ClientPlatform, DesktopCpuArch } from '@/lib/platformTypes';

export type { ClientPlatform, DesktopCpuArch };

export type ClientPlatformState = {
  detected: ClientPlatform;
  effective: ClientPlatform;
  override: ClientPlatform | null;
  setOverride: (value: ClientPlatform | null) => void;
  /** Architecture of this browser’s OS (when desktop); used in “מזוהה”. */
  cpuArch: DesktopCpuArch | null;
  /** Pass to direct-download URL builders: only when effective matches detected. */
  downloadCpuArch: DesktopCpuArch | null;
};

const STORAGE_KEY = 'cursor-course-platform-override';

function detectPlatform(): ClientPlatform {
  if (typeof window === 'undefined') return 'unknown';

  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform?: string; getHighEntropyValues?: (k: string[]) => Promise<Record<string, string>> };
    }
  ).userAgentData;

  const p = (uaData?.platform || platform || '').toLowerCase();

  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  if (/android/i.test(ua)) return 'android';
  if (p.includes('mac') || /macintosh/i.test(ua)) return 'mac';
  if (p.includes('win') || /windows/i.test(ua)) return 'windows';
  if (p.includes('linux') || /linux/i.test(ua)) return 'linux';

  return 'unknown';
}

function detectMacCpu(): DesktopCpuArch | null {
  if (typeof window === 'undefined') return null;
  const ua = navigator.userAgent || '';
  if (/Intel Mac OS X/i.test(ua)) return 'x86';
  if (/Mac OS X/.test(ua) && (/ARM64|aarch64|Apple M/i.test(ua) || !/Intel/.test(ua))) {
    return 'arm';
  }
  return null;
}

function detectWindowsCpu(): DesktopCpuArch | null {
  if (typeof window === 'undefined') return null;
  const ua = navigator.userAgent || '';
  if (/ARM64/i.test(ua)) return 'arm';
  if (/Win64|x64|WOW64|amd64/i.test(ua)) return 'x86';
  return null;
}

function detectLinuxCpu(): DesktopCpuArch | null {
  if (typeof window === 'undefined') return null;
  const ua = navigator.userAgent || '';
  if (/aarch64|arm64|armv8/i.test(ua)) return 'arm';
  if (/x86_64|amd64|x64/i.test(ua)) return 'x86';
  return null;
}

function detectCpuArch(detectedPlatform: ClientPlatform): DesktopCpuArch | null {
  switch (detectedPlatform) {
    case 'mac':
      return detectMacCpu();
    case 'windows':
      return detectWindowsCpu();
    case 'linux':
      return detectLinuxCpu();
    default:
      return null;
  }
}

type NavUaData = Navigator & {
  userAgentData?: {
    architecture?: string;
    getHighEntropyValues?: (keys: string[]) => Promise<Record<string, string>>;
  };
};

export function useClientPlatform(): ClientPlatformState {
  const [detected, setDetected] = useState<ClientPlatform>('unknown');
  const [override, setOverrideState] = useState<ClientPlatform | null>(null);
  const [cpuArch, setCpuArch] = useState<DesktopCpuArch | null>(null);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- client-only: navigator + localStorage after mount (SSR-safe) */
    const p = detectPlatform();
    setDetected(p);
    setCpuArch(detectCpuArch(p));

    if (p === 'windows' || p === 'linux') {
      const uaData = (navigator as NavUaData).userAgentData;
      void uaData
        ?.getHighEntropyValues?.(['architecture'])
        ?.then((hints) => {
          const raw = (hints.architecture || '').toLowerCase();
          let next: DesktopCpuArch | null = null;
          if (raw === 'arm' || raw.includes('aarch')) next = 'arm';
          else if (raw.includes('86') || raw === 'x64') next = 'x86';
          if (next !== null) setCpuArch(next);
        })
        .catch(() => {
          /* ignore */
        });
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && ['mac', 'windows', 'linux', 'ios', 'android', 'unknown'].includes(raw)) {
        setOverrideState(raw as ClientPlatform);
      }
    } catch {
      /* ignore */
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const setOverride = useCallback((value: ClientPlatform | null) => {
    setOverrideState(value);
    try {
      if (value === null) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }, []);

  const effective = useMemo(
    () => (override !== null ? override : detected),
    [override, detected],
  );

  const downloadCpuArch = useMemo(
    () => (effective === detected ? cpuArch : null),
    [effective, detected, cpuArch],
  );

  return {
    detected,
    effective,
    override,
    setOverride,
    cpuArch,
    downloadCpuArch,
  };
}
