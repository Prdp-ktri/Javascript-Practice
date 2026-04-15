console.log("Hello World!");

let a = 5;
let b = 5;

// Arithmetic Operators
console.log("ARITHMETIC OPERATORS");
console.log("1) a + b = ", a + b);
console.log("2) a - b = ", a - b);
console.log("3) a * b = ", a * b);
console.log("4) a / b = ", a / b);
console.log("5) a % b = ", a % b);
console.log("6) a ** b = ", a ** b);
console.log("7) Unary Operator Post = ", a++);
console.log("8) Unary Operator Pre = ", ++a);
console.log("9) Post decrement Unary Operator =", a--);
console.log("10) Pre decrement Unary Operator =", --a);

let c = 2;
let d = 7;
//  Assignment Operators
console.log("ASSIGNMENT OPERATORS");
console.log("1) = ", (c = d));
console.log("2) += ", (c += d));
console.log("3) -= ", (c -= d));
console.log("4) *= ", (c *= d));
console.log("5) /= ", (c /= d));
// console.log("6) %= ", (c %= d));
console.log("7) **= ", (c **= d));

// Comparison Operators
console.log("COMPARISON OPERATORS");
let e = 3;
let f = 6;
console.log("let e = 3");
console.log("let f = 6");
console.log("1) e == f", e == f);
console.log("2) e === f", e === f);
console.log("3) != ", e != f);
console.log("4) !== ", e !== f);
console.log("5) >", e > f);
console.log("6) >=", e >= f);
console.log("7) <", e < f);
console.log("8) <=", e <= f);

// Logical Operators
console.log("LOGICAL OPERATORS");
let g = 9;
let h = 6;
console.log("let g = 9");
console.log("let h = 6");
let cond1 = g > h;
let cond2 = g === h;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1);
console.log(!cond2);

// Conditional Statements
let age = 65;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You can not vote.");
}

let mode = "light";
if (mode === "dark") {
  console.log("black");
} else {
  console.log("white");
}

let num = 8;
if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

if (age >= 18 && age < 50) {
  console.log("You are an Adult.");
} else if (age < 18 && age > 12) {
  console.log("You are a Teen.");
} else if (age < 13 && age < 5) {
  console.log("You are a Kid.");
} else if (age > 49 && age < 61) {
  console.log("You are Middle-Aged.");
} else if (age > 60 && age < 90) {
  console.log("You are a Senior Citizen.");
} else if (age > 89) {
  console.log("Way older than anyone");
} else {
  console.log("Are we still Alive?");
}

// Ternary Operators
let ages = 17;
console.log(ages >= 18 ? "Adult" : "Not an Adult");
