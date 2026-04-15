let gameNum = 25;

for (let i = 1; i <= n; i++) {
  let num = prompt("Enter a number");
  if (num === gameNum) {
    console.log("You guessed the number right!");
  } else {
    num = prompt("Enter the number again");
  }
}
