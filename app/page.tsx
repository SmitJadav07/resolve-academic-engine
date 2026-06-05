"use client";
import { useState } from "react";
import { validateCourseHistory } from "../lib/historyValidator";
import { getGraduationProgress } from "../lib/progressTracker";
import { getEligibleCourses } from "../lib/eligibilityChecker";
import { getBlockedCourses }
from "../lib/blockedCourses";
export default function Home() {
  const [input, setInput] = useState("CS100, CS113");
  
  const completedCourses = input
    .split(",")
    .map((course) => course.trim().toUpperCase())
    .filter((course) => course.length > 0);
  const validation =
  validateCourseHistory(completedCourses);
  const correctedCompletedCourses =
    validation.correctedCompletedCourses;
  const eligibleCourses =
    getEligibleCourses(correctedCompletedCourses);
  const blockedCourses =
    getBlockedCourses(correctedCompletedCourses);
  const progress =
    getGraduationProgress(correctedCompletedCourses);
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-10">
        Resolve Academic Engine
      </h1>
      <div className="mb-8">
  <label className="block text-2xl font-semibold mb-3">
    Enter Completed Courses
  </label>

  <input
    className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white"
    value={input}
    onChange={(event) => setInput(event.target.value)}
    placeholder="Example: CS100, CS113"
  />
</div>
{validation.missingInferredCourses.length > 0 && (
  <div className="mb-8 rounded-lg border border-yellow-600 p-4">
    <h2 className="text-2xl font-semibold mb-3">
      Inferred Missing Prerequisites
    </h2>

    <p>
      Resolve detected that these prerequisite courses were missing
      from your completed course list:
    </p>

    <ul className="mt-2">
      {validation.missingInferredCourses.map((course) => (
        <li key={course}>
          {course}
        </li>
      ))}
    </ul>
  </div>
)}
      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-3">
    Graduation Progress
  </h2>

  <p>
    Completed Credits: {progress.completedCredits}
  </p>

  <p>
    Total Credits: {progress.totalCredits}
  </p>

  <p>
    Progress: {progress.progressPercentage}%
  </p>
</div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Completed Courses
        </h2>

        <ul className="space-y-1">
          {correctedCompletedCourses.map((course) => (
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