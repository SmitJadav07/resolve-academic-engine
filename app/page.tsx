import { getEligibleCourses } from "../lib/eligibilityChecker";
import { getBlockedCourses }
from "../lib/blockedCourses";
export default function Home() {
  const completedCourses = [
    "CS100",
    "CS113",
  ];

  const eligibleCourses =
    getEligibleCourses(completedCourses);
  const blockedCourses =
    getBlockedCourses(completedCourses);
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-10">
        Resolve Academic Engine
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Completed Courses
        </h2>

        <ul className="space-y-1">
          {completedCourses.map((course) => (
            <li key={course}>
              {course}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Eligible Courses
        </h2>

        <ul className="space-y-1">
          {eligibleCourses.map((course) => (
            <li key={course.code}>
              {course.code}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Blocked Courses
        </h2>

        <ul className="space-y-1">
          {blockedCourses.map((course) => (
            <li key={course.code}>
              {course.code} → Missing:{" "}
              {course.missingPrerequisites.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}