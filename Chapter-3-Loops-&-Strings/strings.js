let str = "TOPS Technologies, Gujarat";
let str2 = "      Pradeep Khatri      ";

// toUpperCase
let newString = str.toUpperCase();
console.log(newString);

// trim
console.log(str2);
let string = str2.trim();
console.log(string);

// slice, where ending value is optional (meaning 14)
console.log(string.slice(8, 14));

// concat
let string2 = "Suwal";
let string3 = "Lokesh ";
let newName = string3 + string2;

let oldOne = string3.replace("Lokesh", "Kush");
let oldName = oldOne + string2;
console.log(oldName);

console.log(oldName.charAt(0));
