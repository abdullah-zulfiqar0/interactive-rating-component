let submit = document.querySelector(".submit-button button");
let container = document.querySelector(".container ");

let containerThx = document.querySelector(".container-thankyou");
let buttons = document.querySelectorAll(".buttons button");

let selectedTag = document.getElementById("selected-tag");

buttons.forEach((ekButton) => {
  ekButton.addEventListener("click", (ev) => {
    let clicked = ev.target;
    let number = clicked.innerText;

    buttons.forEach((b) => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });

    clicked.style.backgroundColor = "white";
    clicked.style.color = "black";

    selectedTag.innerText = `You selected ${number} out of 5`;
  });
});

submit.addEventListener("click", () => {
  container.style.display = "none";
  containerThx.style.display = "flex";
});
