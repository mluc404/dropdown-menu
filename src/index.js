import "./styles.css";

// Click button
let btn = document.querySelector("#btn1");
let dropdown = document.querySelector(".dropdown");
btn.addEventListener("click", () => {
  dropdown.style.visibility === "visible"
    ? (dropdown.style.visibility = "hidden")
    : (dropdown.style.visibility = "visible");
});

// Hover button
let btn2 = document.querySelector("#btn2");
let container2 = document.querySelector("#container2");
let dropdown2 = document.querySelector("#dropdown2");

btn2.addEventListener("mouseover", () => {
  dropdown2.style.visibility = "visible";
});
container2.addEventListener("mouseleave", () => {
  dropdown2.style.visibility = "hidden";
});
