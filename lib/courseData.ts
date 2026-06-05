export const courses = [
  {
    code: "CS100",
    credits: 3,
    prerequisites: [],
  },
  {
    code: "CS113",
    credits: 3,
    prerequisites: ["CS100"],
  },
  {
    code: "CS114",
    credits: 3,
    prerequisites: ["CS113"],
  },
  {
    code: "CS241",
    credits: 3,
    prerequisites: ["CS114"],
  },
  {
    code: "CS280",
    credits: 3,
    prerequisites: ["CS241"],
  },
];