import { getEligibleCourses } from "../lib/eligibilityChecker";

export default function Home() {
  const completedCourses = [
    "CS100",
    "CS113",
  ];

  const eligibleCourses =
    getEligibleCourses(completedCourses);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Resolve Academic Engine
      </h1>

      <p className="mt-4">
        Completed Courses:
      </p>

      <ul className="mt-2">
        {completedCourses.map((course) => (
          <li key={course}>
            {course}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">
        Eligible Courses
      </h2>

      <ul className="mt-2">
        {eligibleCourses.map((course) => (
          <li key={course.code}>
            {course.code}
          </li>
        ))}
      </ul>
    </main>
  );
}