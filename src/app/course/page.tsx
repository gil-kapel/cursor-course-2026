import CourseExperience from '@/components/course/CourseExperience';
import { courseData } from '@/data/courseData';
import { STORAGE_KEY } from '@/lib/constants';

export default function CoursePage() {
  return <CourseExperience course={courseData} storageKey={STORAGE_KEY} />;
}
