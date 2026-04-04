export type LessonBadgeType = 'FREE' | 'BEGINNER' | 'INTERMEDIATE' | 'PREMIUM';

export type LessonStatus = 'completed' | 'active' | 'available' | 'locked';

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g. "08:00"
  status: LessonStatus;
  badge?: LessonBadgeType;
  videoUrl?: string;
  attachedFiles?: AttachedFile[];
  notes?: string[];
  /** Copy-paste agent prompts for the "פרומפטים להתקנה" tab. */
  prompts?: string[];
  transcript?: string;
  /** Simple numbered step list shown below the video. */
  checklist?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  icon: string; // lucide icon name
  lessons: Lesson[];
}

export interface AttachedFile {
  id: string;
  name: string;
  type: 'pdf' | 'xlsx' | 'docx' | 'pptx' | 'link' | 'txt' | 'md';
  size: string;
  url?: string;
}

export interface CourseAuthor {
  name: string;
  title: string;
  initials: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  author: CourseAuthor;
  chapters: Chapter[];
  attachedFiles: AttachedFile[];
}

/** Curated copy-paste helpers; course skill path matches lesson folders + sync script. */
export interface LessonSetupContent {
  lessonId: string;
  lessonTitle: string;
  /** Repo-relative path to AGENT_SKILLS.md (for deep links). */
  agentSkillsDocPath: string;
  /** Repo-relative path to the course SKILL folder (single skill per lesson, module 2). */
  courseSkillRepoPath?: string;
  showCursorInstall: boolean;
  showAsmInstall: boolean;
  agentPromptBlock?: string;
  /** Optional: symlink all module-2 skills into .cursor/skills (cloned repo). */
  courseRepoSyncScript?: string;
}
