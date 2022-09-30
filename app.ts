const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Burak",
  age: 25,
  hobbies: ["Fitness", "Gaming"],
  role: [2, "author"],
};

// This role's type is a tuple. Means the first one must be a number
//second one must be a string

//This would be throwing an error because the length of role must be exactly 0

// person.role =  [0, 'admin', 'user']

//Running push method on person.role breaks this rule
//typescript can't catch that and the length will be increased.
