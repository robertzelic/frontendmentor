const form = document.querySelector(".form");
const emailInput = document.querySelector(".email");
const errorMsg = document.querySelector(".error-msg");
const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    form.classList.add("email-error");
  } else if (!emailInput.value.match(validEmail)) {
    errorMsg.textContent = "Please provide a valid email address";
    form.classList.add("email-error");
  } else form.classList.remove("email-error");
});
