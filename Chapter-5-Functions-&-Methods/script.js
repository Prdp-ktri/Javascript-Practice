console.log("Pradeep");

console.log("xyz".toUpperCase());

console.log([1, 2, 3].push(4));

function displayNames(msg) {
  console.log(msg);
}
displayNames("I love India");

function sum(p, q) {
  console.log(p + q);
}
sum(2129, 4447);

function summing(a, p) {
  var s = a + p;
  return s;
}
let val = summing(5, 9);
console.log(val);

// Arrow Functions
const sumFunc = (x, y) => {
  var z = x + y;
  return z;
};
console.log(sumFunc(4, 8));

const mulFunc = (m, n) => {
  return m * n;
};

//practice q: number of vowels in a string
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if ("aeiouAEIOU".includes(char)) {
      count++;
    }
  }
  return count;
}

// forEach loop - this loops loops over an array and is not meant for string

let arr = [9, 2, 4, 5, 0];
arr.forEach((val) => {
  console.log(val);
});

let cities = ["mumbai", "gangtok", "thiruvananthapuram", "jaipur", "chennai"];
cities.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

// Higher Order Function - methods that either take another function as a parameter inside them or they return another function as their output

// q - for a given array of numbers, print the squares of each value using forEach loop
let arrr = [2, 4, 9, 1, 6];
arrr.forEach((val) => {
  console.log(val * val);
});

// 2nd method to solve this problem
let nums = [67, 89, 21, 77, 45];
let calcSqr = (num) => {
  console.log(num * num);
};
nums.forEach(calcSqr);

// map method - creates a new array with the result of some operations. The value its callback returns are used to form a new array
let newArray = nums.map((val) => {
  return val;
});
console.log(newArray);

// filter method - creates a new array of elements that give true for a condition/filter
let array = [2, 54, 21, 33, 78];
let evenArray = array.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArray);

// reduce method - performs some operations and reduces the array to a single value. It returns that single value.
let arr1 = [2, 45, 78, 12, 66];
const newArr = arr1.reduce((res, curr) => {
  return res + curr;
});
console.log(newArr);

// return the largest number
const largestNum = arr1.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largestNum);

// q - we are given array of marks of students. Filter out the marks of students that scored 90+
let array1 = [87, 93, 64, 99, 86];
const toppers = array1.filter((val) => {
  return val > 90;
});
console.log(toppers);

