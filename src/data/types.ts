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
  transcript?: string;
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
