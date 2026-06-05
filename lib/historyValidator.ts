import { courses } from "./courseData";

function findCourse(courseCode: string) {
  return courses.find((course) => course.code === courseCode);
}

function collectPrerequisites(
  courseCode: string,
  collectedPrerequisites: Set<string>
) {
  const course = findCourse(courseCode);

  if (!course) {
    return;
  }

  course.prerequisites.forEach((prereq) => {
    if (!collectedPrerequisites.has(prereq)) {
      collectedPrerequisites.add(prereq);
      collectPrerequisites(prereq, collectedPrerequisites);
    }
  });
}

export function validateCourseHistory(
  completedCourses: string[]
) {
  const inferredCourses = new Set<string>();

  completedCourses.forEach((courseCode) => {
    collectPrerequisites(courseCode, inferredCourses);
  });

  const missingInferredCourses = Array.from(
    inferredCourses
  ).filter(
    (courseCode) => !completedCourses.includes(courseCode)
  );

  const correctedCompletedCourses = Array.from(
    new Set([
      ...completedCourses,
      ...missingInferredCourses,
    ])
  );

  return {
    missingInferredCourses,
    correctedCompletedCourses,
  };
}