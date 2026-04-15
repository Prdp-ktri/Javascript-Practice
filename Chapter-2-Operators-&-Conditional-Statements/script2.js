// let num = prompt("Enter a number");

// if (num % 7 === 0) {
//   console.log(num, " is a multiple of 7");
// } else {
//   console.log(num, " is not a multiple of 7");
// }

let score = 47;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 40 && score <= 49) {
  grade = "E";
} else {
  grade = "F";
}
console.log("Your grade is", grade);
