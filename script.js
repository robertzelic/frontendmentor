const form = document.querySelector("form");
const button = document.querySelector("button");
const thankYou = document.querySelector(".thank-you");
const seletedRate = document.querySelector(".selected-rate");
const rates = document.querySelectorAll(".rate");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  thankYou.classList.remove("hide");
  seletedRate.textContent = document.querySelector("input:checked").id;
});

rates.forEach((element) => {
  element.addEventListener("change", () => {
    button.disabled = false;
  });
});
