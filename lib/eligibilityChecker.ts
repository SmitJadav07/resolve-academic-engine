import { courses } from "./courseData";

export function getEligibleCourses(
  completedCourses: string[]
) {
  return courses.filter((course) => {
    const hasCompletedCourse =
      completedCourses.includes(course.code);

    const prerequisitesMet =
      course.prerequisites.every((prereq) =>
        completedCourses.includes(prereq)
      );

    return (
      !hasCompletedCourse &&
      prerequisitesMet
    );
  });
}