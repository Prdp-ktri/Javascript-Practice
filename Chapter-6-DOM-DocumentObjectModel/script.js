// let h2 = document.querySelector("h2");

// console.dir(h2);

// h2.innerText = h2.innerText + " from Apna College students";

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}

divs[0].innerText = "new Unique value 1";
divs[1].innerText = "new Unique value 2";
divs[2].innerText = "new Unique value 3";
