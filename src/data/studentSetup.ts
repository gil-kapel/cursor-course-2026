/**
 * Lesson setup metadata. Course skill paths = single source under module-02 (same tree as sync script).
 * GitHub URLs for `asm add skill` and doc links use getPublicCourseSkillsRepoBase() (env + default).
 */

import type { LessonSetupContent } from './types';

const MODULE2 = 'course/he_beginner_v2/module-02-skills-and-agents';

/** Canonical GitHub root for module-2 skill trees and AGENT_SKILLS.md (no trailing slash). */
export const DEFAULT_MODULE2_SKILLS_REPO_URL = 'https://github.com/gil-kapel/cursor-course-2026';

/**
 * Base URL for module-2 skill installs and deep links.
 * Precedence: `NEXT_PUBLIC_MODULE2_SKILLS_REPO_URL` → `NEXT_PUBLIC_COURSE_REPO_URL` → default.
 */
export function getPublicCourseSkillsRepoBase(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_MODULE2_SKILLS_REPO_URL?.replace(/\/$/, '')
    || process.env.NEXT_PUBLIC_COURSE_REPO_URL?.replace(/\/$/, '');
  return fromEnv || DEFAULT_MODULE2_SKILLS_REPO_URL;
}

/** @deprecated Use getCursorDirectDownloadUrl from cursorDownloads */
export const CURSOR_DOWNLOAD_URL = 'https://cursor.com/download';

const M2_FOLLOWUP_PROMPT =
  'המשך מאותו שיעור. אם פקודות "סקיל הקורס" עדיין לא רצו בטרמינל — הריצו אותן מלשונית "פרומפטים". אחרת פתחו README ו-SKILL.md של אותה תיקיית שיעור והמשיכו בתרגיל.';

function m2Paths(lessonFolder: string, skillDir: string) {
  const base = `${MODULE2}/${lessonFolder}`;
  return {
    agentSkillsDocPath: `${base}/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${base}/${skillDir}`,
  };
}

function m2First(
  lessonId: string,
  lessonTitle: string,
  lessonFolder: string,
  skillDir: string,
  agentPromptBlock: string,
  courseRepoSyncScript?: string,
): LessonSetupContent {
  return {
    lessonId,
    lessonTitle,
    ...m2Paths(lessonFolder, skillDir),
    showCursorInstall: false,
    showAsmInstall: true,
    courseRepoSyncScript,
    agentPromptBlock,
  };
}

function m2Follow(
  lessonId: string,
  lessonTitle: string,
  lessonFolder: string,
  skillDir: string,
): LessonSetupContent {
  return {
    lessonId,
    lessonTitle,
    ...m2Paths(lessonFolder, skillDir),
    showCursorInstall: false,
    showAsmInstall: false,
    agentPromptBlock: M2_FOLLOWUP_PROMPT,
  };
}

const SETUP: Record<string, LessonSetupContent> = {
  '1.1': {
    lessonId: '1.1',
    lessonTitle: 'מה זה Cursor (א): הורדה והתקנה',
    agentSkillsDocPath: '',
    showCursorInstall: true,
    showAsmInstall: false,
    agentPromptBlock:
      'פתחו צ\'אט (⌘L / Ctrl+L). הדביקו את הטקסט מקובץ cursor-first-setup.en.txt (או בקשו: התחברות ל-Cursor, בחירת מודל בברירת המחדל, והכנה לעבודה בתיקיית פרויקט).',
  },
  '1.1b': {
    lessonId: '1.1b',
    lessonTitle: 'מה זה Cursor (ב): חשבון, מודלים ו-Workspace',
    agentSkillsDocPath: '',
    showCursorInstall: false,
    showAsmInstall: false,
    agentPromptBlock:
      'המשך משיעור 1.1. אם עדיין לא חיברתם חשבון ובחרתם מודל — עשו זאת בהגדרות Cursor. ודאו שפתחתם תיקיית פרויקט עם File → Open Folder.',
  },
  '2.1': m2First(
    '2.1',
    'מבוא ל-Skills (א)',
    'lesson-2.1-skills-intro',
    'cursor-skill-foundation',
    '1) מעמוד הבית: בהתקנת ASM בחרו "צ\'אט ב-Cursor" או "טרמינל", והשלימו פעם אחת לפרויקט.\n2) אחרי שיש asm.toml, הריצו בטרמינל את שתי הפקודות ב"סקיל הקורס" — זה מתקין רק את סקיל הקורס לשיעור 2.1 (cursor-skill-foundation).',
    'uv run scripts/sync_module02_project_skills.py',
  ),
  '2.1b': m2Follow('2.1b', 'מבוא ל-Skills (ב)', 'lesson-2.1-skills-intro', 'cursor-skill-foundation'),
  '2.2': m2First(
    '2.2',
    'סוכן מוצר (א): מרעיון ל-PRD',
    'lesson-2.2-product-agent-prd',
    'product-prd-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" בטרמינל — רק product-prd-agent מהריפו.',
  ),
  '2.2b': m2Follow('2.2b', 'סוכן מוצר (ב): המשך PRD', 'lesson-2.2-product-agent-prd', 'product-prd-agent'),
  '2.3': m2First(
    '2.3',
    'סוכן Tech Lead (א): ארכיטקטורה',
    'lesson-2.3-tech-lead-architecture',
    'tech-lead-architecture-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — tech-lead-architecture-agent בלבד.',
  ),
  '2.3b': m2Follow('2.3b', 'סוכן Tech Lead (ב): המשך', 'lesson-2.3-tech-lead-architecture', 'tech-lead-architecture-agent'),
  '2.4': m2First(
    '2.4',
    'סוכן UX (א): זרימות משתמש',
    'lesson-2.4-ux-user-flow',
    'ux-user-flow-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ux-user-flow-agent בלבד.',
  ),
  '2.4b': m2Follow('2.4b', 'סוכן UX (ב): המשך', 'lesson-2.4-ux-user-flow', 'ux-user-flow-agent'),
  '2.5': m2First(
    '2.5',
    'סוכן UI (א): מערכות עיצוב',
    'lesson-2.5-ui-design-systems',
    'ui-design-systems-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ui-design-systems-agent בלבד.',
  ),
  '2.5b': m2Follow('2.5b', 'סוכן UI (ב): המשך', 'lesson-2.5-ui-design-systems', 'ui-design-systems-agent'),
  '2.6': m2First(
    '2.6',
    'סוכן אבטחה',
    'lesson-2.6-security-agent',
    'security-review-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — security-review-agent בלבד.',
  ),
  '2.7': m2First(
    '2.7',
    'סוכן פיתוח (א): Composer',
    'lesson-2.7-dev-agent-composer',
    'dev-composer-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — dev-composer-agent בלבד.',
  ),
  '2.7b': m2Follow('2.7b', 'סוכן פיתוח (ב): Composer', 'lesson-2.7-dev-agent-composer', 'dev-composer-agent'),
  '2.7c': m2Follow('2.7c', 'סוכן פיתוח (ג): Composer', 'lesson-2.7-dev-agent-composer', 'dev-composer-agent'),
  '2.8': m2First(
    '2.8',
    'סוכן Code Review (א)',
    'lesson-2.8-code-review-agent',
    'code-review-cleanup-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — code-review-cleanup-agent בלבד.',
  ),
  '2.8b': m2Follow('2.8b', 'סוכן Code Review (ב)', 'lesson-2.8-code-review-agent', 'code-review-cleanup-agent'),
  '2.9': m2First(
    '2.9',
    'סוכן QA (א): בדיקות',
    'lesson-2.9-qa-tests-agent',
    'qa-tests-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — qa-tests-agent בלבד.',
  ),
  '2.9b': m2Follow('2.9b', 'סוכן QA (ב): בדיקות', 'lesson-2.9-qa-tests-agent', 'qa-tests-agent'),
  '2.10': m2First(
    '2.10',
    'סוכן Debug (א)',
    'lesson-2.10-debug-agent',
    'debug-fix-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — debug-fix-agent בלבד.',
  ),
  '2.10b': m2Follow('2.10b', 'סוכן Debug (ב)', 'lesson-2.10-debug-agent', 'debug-fix-agent'),
  '2.11': m2First(
    '2.11',
    'מסד נתונים מקומי (א)',
    'lesson-2.11-local-db',
    'local-db-development-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — local-db-development-agent בלבד.',
  ),
  '2.11b': m2Follow('2.11b', 'מסד נתונים מקומי (ב)', 'lesson-2.11-local-db', 'local-db-development-agent'),
};

export function getLessonSetup(lessonId: string): LessonSetupContent | null {
  return SETUP[lessonId] ?? null;
}

/** `asm add skill` + `asm sync` for the course skill (GitHub tree URL from getPublicCourseSkillsRepoBase()). */
export function buildCourseSkillInstallSnippet(courseSkillRepoPath: string): string {
  const base = getPublicCourseSkillsRepoBase();
  const skillUrl = `${base}/tree/main/${courseSkillRepoPath}`;
  return `asm add skill '${skillUrl}'\nasm sync`;
}

export function getResolvedCourseSkillTerminal(content: LessonSetupContent): string | null {
  if (!content.courseSkillRepoPath) return null;
  return buildCourseSkillInstallSnippet(content.courseSkillRepoPath);
}

/** GitHub web URL to AGENT_SKILLS.md under getPublicCourseSkillsRepoBase(). */
export function agentSkillsMarkdownUrl(agentSkillsDocPath: string): string | null {
  if (!agentSkillsDocPath) return null;
  const base = getPublicCourseSkillsRepoBase();
  return `${base}/blob/main/${agentSkillsDocPath}`;
}

export function agentSkillFolderUrl(courseSkillRepoPath: string): string {
  const base = getPublicCourseSkillsRepoBase();
  return `${base}/tree/main/${courseSkillRepoPath}`;
}

export function platformLabel(platform: string): string {
  const map: Record<string, string> = {
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    ios: 'iOS / iPadOS',
    android: 'Android',
    unknown: 'לא זוהה',
  };
  return map[platform] ?? platform;
}
