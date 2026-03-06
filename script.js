// 10 Student Objects
const students = [
  { name: "Aman", marks: 78, subject: "Math" },
  { name: "Riya", marks: 35, subject: "Physics" },
  { name: "Karan", marks: 92, subject: "Math" },
  { name: "Neha", marks: 67, subject: "Chemistry" },
  { name: "Arjun", marks: 40, subject: "Physics" },
  { name: "Priya", marks: 88, subject: "Math" },
  { name: "Rahul", marks: 23, subject: "Chemistry" },
  { name: "Sneha", marks: 55, subject: "Physics" },
  { name: "Vikram", marks: 73, subject: "Math" },
  { name: "Anita", marks: 30, subject: "Chemistry" }
];

// Pass Students (marks >= 40)
const passedStudents = students.filter(student => student.marks >= 40);

// Fail Students (marks < 40)
const failedStudents = students.filter(student => student.marks < 40);

// Average Marks
const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

// Topper
const topper = students.reduce((max, student) =>
  student.marks > max.marks ? student : max
);

// Group by Subject
const groupedBySubject = students.reduce((acc, student) => {
  if (!acc[student.subject]) {
    acc[student.subject] = [];
  }
  acc[student.subject].push(student);
  return acc;
}, {});

// Output
console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Average Marks:", averageMarks);
console.log("Topper:", topper);
console.log("Grouped by Subject:", groupedBySubject);
