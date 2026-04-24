let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);

let newestBtn = document.createElement("button");
newestBtn.innerText = "Click me!";
console.log(newestBtn);

let para = document.querySelector("p");
para.before(newestBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Practicing my JavaScript</i>";
document.querySelector("body").prepend(newHeading);

para.remove();
