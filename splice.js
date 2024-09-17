const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 24, major: "Mechanical Engineering" },
  { name: "Charlie", age: 21, major: "Business" },
  { name: "David", age: 23, major: "Mathematics" },
  { name: "Eve", age: 25, major: "Physics" },
];
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names);

// The splice() method in JavaScript is used to modify the contents
// of an array by removing, replacing, or adding elements at a specified index

let splicedArray = names.splice(2);
console.log(splicedArray);
console.log(names);
