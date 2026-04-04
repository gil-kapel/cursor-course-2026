'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ClientPlatform, MacCpuKind } from '@/lib/platformTypes';

export type { ClientPlatform, MacCpuKind };

export type ClientPlatformState = {
  detected: ClientPlatform;
  effective: ClientPlatform;
  override: ClientPlatform | null;
  setOverride: (value: ClientPlatform | null) => void;
  /** For macOS direct Cursor builds (arm64 vs x64). */
  macCpu: MacCpuKind;
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

function detectMacCpu(): MacCpuKind {
  if (typeof window === 'undefined') return null;
  const ua = navigator.userAgent || '';
  if (/Intel Mac OS X/i.test(ua)) return 'x86';
  if (/Mac OS X/.test(ua) && (/ARM64|aarch64|Apple M/i.test(ua) || !/Intel/.test(ua))) {
    return 'arm';
  }
  return null;
}

export function useClientPlatform(): ClientPlatformState {
  const [detected, setDetected] = useState<ClientPlatform>('unknown');
  const [override, setOverrideState] = useState<ClientPlatform | null>(null);
  const [macCpu, setMacCpu] = useState<MacCpuKind>(null);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- client-only: navigator + localStorage after mount (SSR-safe) */
    const p = detectPlatform();
    setDetected(p);
    if (p === 'mac') setMacCpu(detectMacCpu());
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

  return {
    detected,
    effective,
    override,
    setOverride,
    macCpu,
  };
}
