import CourseExperience from '@/components/course/CourseExperience';
import { courseData } from '@/data/courseData';
import { STORAGE_KEY } from '@/lib/constants';
import { auth } from '@/lib/auth';
import { canAccessLesson } from '@/lib/entitlements';
import type { Course } from '@/data/types';

export default async function CoursePage() {
  const session = await auth();
  const user = session?.user ?? null;
  const userId = user?.id ?? null;

  const enrichedCourse = await enrichCourseAccess(courseData, userId);

  return (
    <CourseExperience
      course={enrichedCourse}
      storageKey={STORAGE_KEY}
      user={user ? { name: user.name, email: user.email, image: user.image } : null}
    />
  );
}

async function enrichCourseAccess(course: Course, userId: string | null): Promise<Course> {
  const chapters = await Promise.all(
    course.chapters.map(async (chapter) => {
      const lessons = await Promise.all(
        chapter.lessons.map(async (lesson) => {
          if (lesson.status !== 'locked') return lesson;
          const access = await canAccessLesson(userId, lesson.id, lesson.status);
          if (access === 'full') return { ...lesson, status: 'available' as const };
          return lesson;
        }),
      );
      return { ...chapter, lessons };
    }),
  );
  return { ...course, chapters };
}
