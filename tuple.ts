let x: [string, number];

x = ["Hello", 1];

// 순서를 지킬것
// x = [1, "string"]; // (x) 
// x[2] = "world"; // index가 지정되지 않음!

const person: [string, number] = ["Oliver", 22]

const [first, second] = person;
// const [first, second, third] = person; // third는 undefined


