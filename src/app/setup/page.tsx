import type { Metadata } from 'next';
import FastStartPage from '@/components/setup/FastStartPage';

export const metadata: Metadata = {
  title: 'הכנה לקורס | קורס Cursor',
  description:
    'זיהוי מערכת, הורדת Cursor, והתקנת ASM — הכנה לפני השיעורים.',
};

export default function SetupPage() {
  return <FastStartPage />;
}
