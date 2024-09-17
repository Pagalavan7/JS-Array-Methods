const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 24, major: "Mechanical Engineering" },
  { name: "Charlie", age: 21, major: "Business" },
  { name: "David", age: 23, major: "Mathematics" },
  { name: "Eve", age: 25, major: "Physics" },
];
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names);

//slice() = Extracts the part of an array without changing the original array//
// The slice() method in JavaScript is used to extract a section
//of an array or string and return it as a new array (or string)
//without modifying the original

let slicedArray = names.slice(2);
let slicedArray2 = names.slice(1, 4);
console.log(slicedArray);
console.log(slicedArray2);
console.log(names.slice(-1));
console.log(names.slice(-4));
console.log(names.slice(1, -1));

console.log("I'm in console");
