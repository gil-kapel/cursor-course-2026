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

const SETUP: Record<string, LessonSetupContent> = {
  '1.1': {
    lessonId: '1.1',
    lessonTitle: 'מה זה Claude ו-Cursor (והתקנה)',
    agentSkillsDocPath: '',
    showCursorInstall: true,
    showAsmInstall: false,
    agentPromptBlock:
      'פתחו צ\'אט (⌘L / Ctrl+L). כתבו: "עזרו לי להתקין Cursor ולהוסיף את הרחבת Claude לפי הקורס — אני בשלב ההתקנה הראשון."',
  },
  '2.1': {
    lessonId: '2.1',
    lessonTitle: 'מבוא ל-Skills',
    agentSkillsDocPath: `${MODULE2}/lesson-2.1-skills-intro/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.1-skills-intro/cursor-skill-foundation`,
    showCursorInstall: false,
    showAsmInstall: true,
    courseRepoSyncScript: 'uv run scripts/sync_module02_project_skills.py',
    agentPromptBlock:
      '1) מעמוד הבית: בהתקנת ASM בחרו "צ\'אט ב-Cursor" או "טרמינל", והשלימו פעם אחת לפרויקט.\n2) אחרי שיש asm.toml, הריצו בטרמינל את שתי הפקודות ב"סקיל הקורס" — זה מתקין רק את סקיל הקורס לשיעור 2.1 (cursor-skill-foundation).',
  },
  '2.2': {
    lessonId: '2.2',
    lessonTitle: 'סוכן מוצר: מרעיון ל-PRD',
    agentSkillsDocPath: `${MODULE2}/lesson-2.2-product-agent-prd/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.2-product-agent-prd/product-prd-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" בטרמינל — רק product-prd-agent מהריפו.',
  },
  '2.3': {
    lessonId: '2.3',
    lessonTitle: 'סוכן Tech Lead: ארכיטקטורה',
    agentSkillsDocPath: `${MODULE2}/lesson-2.3-tech-lead-architecture/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.3-tech-lead-architecture/tech-lead-architecture-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — tech-lead-architecture-agent בלבד.',
  },
  '2.4': {
    lessonId: '2.4',
    lessonTitle: 'סוכן UX: זרימות משתמש',
    agentSkillsDocPath: `${MODULE2}/lesson-2.4-ux-user-flow/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.4-ux-user-flow/ux-user-flow-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ux-user-flow-agent בלבד.',
  },
  '2.5': {
    lessonId: '2.5',
    lessonTitle: 'סוכן UI: מערכות עיצוב',
    agentSkillsDocPath: `${MODULE2}/lesson-2.5-ui-design-systems/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.5-ui-design-systems/ui-design-systems-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — ui-design-systems-agent בלבד.',
  },
  '2.6': {
    lessonId: '2.6',
    lessonTitle: 'סוכן אבטחה',
    agentSkillsDocPath: `${MODULE2}/lesson-2.6-security-agent/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.6-security-agent/security-review-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — security-review-agent בלבד.',
  },
  '2.7': {
    lessonId: '2.7',
    lessonTitle: 'סוכן פיתוח: Composer',
    agentSkillsDocPath: `${MODULE2}/lesson-2.7-dev-agent-composer/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.7-dev-agent-composer/dev-composer-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — dev-composer-agent בלבד.',
  },
  '2.8': {
    lessonId: '2.8',
    lessonTitle: 'סוכן Code Review',
    agentSkillsDocPath: `${MODULE2}/lesson-2.8-code-review-agent/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.8-code-review-agent/code-review-cleanup-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — code-review-cleanup-agent בלבד.',
  },
  '2.9': {
    lessonId: '2.9',
    lessonTitle: 'סוכן QA: בדיקות',
    agentSkillsDocPath: `${MODULE2}/lesson-2.9-qa-tests-agent/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.9-qa-tests-agent/qa-tests-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — qa-tests-agent בלבד.',
  },
  '2.10': {
    lessonId: '2.10',
    lessonTitle: 'סוכן Debug',
    agentSkillsDocPath: `${MODULE2}/lesson-2.10-debug-agent/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.10-debug-agent/debug-fix-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — debug-fix-agent בלבד.',
  },
  '2.11': {
    lessonId: '2.11',
    lessonTitle: 'מסד נתונים מקומי',
    agentSkillsDocPath: `${MODULE2}/lesson-2.11-local-db/AGENT_SKILLS.md`,
    courseSkillRepoPath: `${MODULE2}/lesson-2.11-local-db/local-db-development-agent`,
    showCursorInstall: false,
    showAsmInstall: true,
    agentPromptBlock:
      'אחרי ש-ASM מוכן, הריצו את פקודות "סקיל הקורס" — local-db-development-agent בלבד.',
  },
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
