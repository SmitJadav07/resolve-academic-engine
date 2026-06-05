import { courses } from "./courseData";

export function getGraduationProgress(completedCourses: string[]) {
  const completedCourseObjects = courses.filter((course) =>
    completedCourses.includes(course.code)
  );

  const completedCredits = completedCourseObjects.reduce(
    (total, course) => total + course.credits,
    0
  );

  const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
  );

  const progressPercentage = Math.round(
    (completedCredits / totalCredits) * 100
  );

  return {
    completedCredits,
    totalCredits,
    progressPercentage,
  };
}