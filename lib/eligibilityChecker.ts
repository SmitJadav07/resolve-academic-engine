import { courses } from "./courseData";

export function getEligibleCourses(
  completedCourses: string[]
) {
  return courses.filter((course) => {
    return course.prerequisites.every((prereq) =>
      completedCourses.includes(prereq)
    );
  });
}