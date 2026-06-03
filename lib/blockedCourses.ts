import { courses } from "./courseData";

export function getBlockedCourses(
  completedCourses: string[]
) {
  return courses
    .filter((course) => {
      const hasCompletedCourse =
        completedCourses.includes(course.code);

      const prerequisitesMet =
        course.prerequisites.every((prereq) =>
          completedCourses.includes(prereq)
        );

      return (
        !hasCompletedCourse &&
        !prerequisitesMet
      );
    })
    .map((course) => {
      const missingPrerequisites =
        course.prerequisites.filter(
          (prereq) =>
            !completedCourses.includes(prereq)
        );

      return {
        code: course.code,
        missingPrerequisites,
      };
    });
}