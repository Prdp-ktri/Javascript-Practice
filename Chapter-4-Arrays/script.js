let marks = [27, 89, 92, 76, 69];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[3]);

marks[3] = 80;
console.log(marks);

let words = ["space", "sand", "water", "trees", "rivers"];
words[4] = "pond";
console.log(words);

// for loop
console.log("// for loop");
for (let idx = 0; idx < words.length; idx++) {
  console.log(words[idx]);
}

// for of loop
console.log("// for of loop");
for (let matter of words) {
  console.log(matter.toUpperCase());
}

// average marks of entire class
let mark = [37, 78, 90, 62, 44];
let sum = 0;
for (let val of mark) {
  sum += val;
}
console.log(sum);

let average = sum / mark.length;
console.log("Average is", average);

let percent = (sum / 500) * 100;
console.log("Percentage is", percent);

let prices = [250, 700, 900, 350, 660];
let i = 0;

// through for of loop
for (let value of prices) {
  let offer = value / 10;
  prices[i] = prices[i] - offer;
  console.log(`value after offer = ${prices[i]}`);
  i++;
}

// through for loop
for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
}
console.log(prices);

// push
prices.push(740);
console.log(prices);

// pop
prices.pop();
console.log(prices);

// shift
prices.shift();
console.log(prices);

// unshift
prices.unshift(290);
console.log(prices);

// convert to string
const prcStr = prices.toString();
console.log(prcStr);

// create an array to store companies - "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"
var companies = [
  "bloomberg",
  "microsoft",
  "uber",
  "google",
  "ibm",
  "google",
  "ibm",
  "netflix",
];
console.log(companies);

// remove the first coompany from the array
companies.shift();
console.log(companies);

// remove uber and add ola in its place
companies.splice(1, 1, "ola");
console.log(companies);

// add Amazon at the end
companies.push("Amazon");
console.log(companies);
