let gameNum = 25;
let randNum = prompt("Guess a number:");

while (randNum !== gameNum) {
  randNum = Number(prompt("Guess the number again!"));
}
console.log("You guessed the number right, it's 25");
