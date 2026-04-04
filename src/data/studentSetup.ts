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

function m2Lesson(
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
    agentPromptBlock: `${agentPromptBlock}\n\n${M2_FOLLOWUP_PROMPT}`,
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
  '2.1': m2Lesson(
    '2.1',
    'מבוא ל-Skills — כללים, סקילים וסוגי ערך',
    'lesson-2.1-skills-intro',
    'cursor-skill-foundation',
    'שיעור יסודות: Rules מול Skills. התקנת ASM והסקיל בפועל — בשיעור 2.3; אם כבר יש asm.toml, אפשר להריץ מלשונית "סקיל הקורס" את פקודות asm add skill + asm sync ל־cursor-skill-foundation.',
    'uv run scripts/sync_module02_project_skills.py',
  ),
  '2.2': {
    lessonId: '2.2',
    lessonTitle: 'אנטומיה של סקיל: טריגרים, טוב מול גרוע',
    agentSkillsDocPath: `${MODULE2}/lesson-2.1-skills-intro/AGENT_SKILLS.md`,
    showCursorInstall: false,
    showAsmInstall: false,
    agentPromptBlock: `${'תרגיל שיעור 2.2: פתחו את dev-composer-agent/SKILL.md מהריפו של הקורס. הסבירו מה ב־frontmatter עוזר לטריגר, מה סדר השלבים בגוף, ומה צורת הפלט. אל תתקינו סקילים חדשים בשיעור הזה אלא אם כבר בתרגול חופשי.'}\n\n${M2_FOLLOWUP_PROMPT}`,
  },
  '2.3': {
    lessonId: '2.3',
    lessonTitle: 'חיפוש והתקנת סקילים עם ASM',
    agentSkillsDocPath: `${MODULE2}/lesson-2.1-skills-intro/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.1-skills-intro/cursor-skill-foundation`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock: `${'1) ודאו ש-ASM מותקן ויש asm.toml בפרויקט (כמו בשיעור 1.1 אם עוד לא).\n2) הריצו asm search עם שאילתה רלוונטית, בחרו מועמד מהטבלה ב-AGENT_SKILLS.md של שיעור 2.1.\n3) הריצו asm add skill + asm sync. אופציונלי: asm create expertise לפי המסמך.\n4) דווחו מה הותקן ואיפה מופיע ב-.asm/main_asm.md.'}\n\n${M2_FOLLOWUP_PROMPT}`,
    courseRepoSyncScript: 'uv run scripts/sync_module02_project_skills.py',
  },
  '2.4': m2Lesson(
    '2.4',
    'סוכן מוצר: מרעיון ל-PRD',
    'lesson-2.2-product-agent-prd',
    'product-prd-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" בטרמינל — רק product-prd-agent מהריפו.',
  ),
  '2.5': m2Lesson(
    '2.5',
    'סוכן Tech Lead: ארכיטקטורה וחיתוכים',
    'lesson-2.3-tech-lead-architecture',
    'tech-lead-architecture-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — tech-lead-architecture-agent בלבד.',
  ),
  '2.6': m2Lesson(
    '2.6',
    'סוכן UX: זרימות, ריק, שגיאה ומסירה',
    'lesson-2.4-ux-user-flow',
    'ux-user-flow-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ux-user-flow-agent בלבד.',
  ),
  '2.7': m2Lesson(
    '2.7',
    'סוכן UI: מערכת עיצוב, נגישות ורספונסיביות',
    'lesson-2.5-ui-design-systems',
    'ui-design-systems-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ui-design-systems-agent בלבד.',
  ),
  '2.8': m2Lesson(
    '2.8',
    'סוכן אבטחה',
    'lesson-2.6-security-agent',
    'security-review-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — security-review-agent בלבד.',
  ),
  '2.9': m2Lesson(
    '2.9',
    'סוכן פיתוח: Composer, דיפ והרצה מקומית',
    'lesson-2.7-dev-agent-composer',
    'dev-composer-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — dev-composer-agent בלבד.',
  ),
  '2.10': m2Lesson(
    '2.10',
    'סוכן Code Review',
    'lesson-2.8-code-review-agent',
    'code-review-cleanup-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — code-review-cleanup-agent בלבד.',
  ),
  '2.11': m2Lesson(
    '2.11',
    'סוכן QA: תכנון בדיקות וטסטים',
    'lesson-2.9-qa-tests-agent',
    'qa-tests-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — qa-tests-agent בלבד.',
  ),
  '2.12': m2Lesson(
    '2.12',
    'סוכן Debug',
    'lesson-2.10-debug-agent',
    'debug-fix-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — debug-fix-agent בלבד.',
  ),
  '2.13': m2Lesson(
    '2.13',
    'מסד מקומי: SQLite, JSON וגשר לענן',
    'lesson-2.11-local-db',
    'local-db-development-agent',
    'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — local-db-development-agent בלבד.',
  ),
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
