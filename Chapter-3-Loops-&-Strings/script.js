console.log("TOPS Technologies");
console.log("TOPS Technologies");
console.log("TOPS Technologies");
console.log("TOPS Technologies");
console.log("TOPS Technologies");

// Loops in JS
// for Loop
for (let count = 1; count <= 5; count++) {
  console.log("TOPS Technologies");
}
console.log(" For Loop has ended.");

// Calculate sum of 1 to 5
console.log("=>For Loop");
let sum = 0;
let n = 3;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum is:", sum);

// while Loop
console.log("=>While Loop");
let i = 1;
while (i <= 10) {
  console.log("TOPS Technologies, Gujarat");
  i++;
}

// Do While Loop
console.log("=> Do While Loop");
let j = 1;
do {
  console.log("j =", j);
  j++;
} while (j <= 10);

// For Of Loop
let str = "Bharat Mata Ki Jai";
let size = 0;
for (let k of str) {
  console.log("k=", k);
  size++;
}
console.log("String Size =", size);

// For In Loop
let student = {
  name: "Pradeep Khatri",
  rollno: 32,
  subject: "Commerce",
  age: 28,
  Percentage: 81.4,
  isPass: true,
};
for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}

// For practice
for (let nums = 0; nums <= 100; nums++) {
  console.log("num =", nums);
}

// all even numbers till 100
for (let counts = 0; counts <= 100; counts++) {
  if (counts % 2 === 0) {
    console.log(counts);
  }
}

// all odd numbers till 100
for (let counting = 0; counting <= 100; counting++) {
  if (counting % 2 !== 0) {
    console.log(counting);
  }
}
