let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
let box = document.querySelector(".boxDiv");

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    console.log("mode clicked");
  });
}

if (box) {
  box.addEventListener("mouseenter", () => {
    if (box.classList.contains("hovered")) {
      box.classList.remove("hovered");
      box.classList.add("hover");
    } else {
      box.classList.remove("hover");
      box.classList.add("hovered");
    }
  });
}
