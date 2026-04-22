
const appName = "ES6 Conversion Lab";
let counter = 0;

counter += 1;


const greet = (name) => {
  return `Hello ${name}`;
};

// shorter version
const greetShort = name => `Hello ${name}`;

const studentName = "Michael Sam";
const course = "BSIT";

const message = `Welcome ${studentName}, you are enrolled in ${course}.`;


const user = {
  id: 1,
  username: "admin",
  role: "student"
};

// object destructuring
const { username, role } = user;

// array destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;


// arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// objects
const userProfile = {
  name: "Michael Sam",
  age: 20
};

const updatedProfile = {
  ...userProfile,
  school: "Universidad de Dagupan"
};

const multiply = (a, b = 2) => {
  return a * b;
};

const output = document.getElementById("output");

output.innerHTML = `
  <p><b>App Name:</b> ${appName}</p>
  <p><b>Counter:</b> ${counter}</p>
  <p><b>Greet:</b> ${greet("Student")}</p>
  <p><b>Short Greet:</b> ${greetShort("Developer")}</p>
  <p><b>Message:</b> ${message}</p>
  <p><b>Destructuring:</b> ${username} - ${role}</p>
  <p><b>Array Values:</b> ${first}, ${second}</p>
  <p><b>Spread Array:</b> ${arr2.join(", ")}</p>
  <p><b>Spread Object School:</b> ${updatedProfile.school}</p>
  <p><b>Multiply Default Param:</b> ${multiply(5)}</p>
`;
