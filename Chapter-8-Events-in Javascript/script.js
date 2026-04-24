let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  console.log("btn1 was clicked");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
});

btn1.removeEventListener("click", (e) => {
  console.log(e);
});

let div = document.querySelector("div");
div.onmouseover = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
  console.log("you are inside div");
};
