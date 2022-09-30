enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Burak",
//   age: 25,
//   hobbies: ["Fitness", "Gaming"],
//   role: [2, "author"],
// };

// This role's type is a tuple. Means the first one must be a number
//second one must be a string

//This would be throwing an error because the length of role must be exactly 0

// person.role =  [0, 'admin', 'user']

//Running push method on person.role breaks this rule
//typescript can't catch that and the length will be increased.

const person = {
  name: "Burak",
  age: 25,
  hobbies: ["Fitness", "Gaming"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

//ENUM Type saves us from having to manage the global constants and remembering the variable names
// to use it while doing some conditionals.

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result:" + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

// FUNCTION AS TYPES
// Here is how we can define a variable with a function type
// a function that takes two number parameters and returns a number
