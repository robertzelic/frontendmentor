const form = document.querySelector("form");
const inputGroup = form.querySelectorAll(".input-group");
const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputGroup.forEach((inputGroupElement) => {
    const input = inputGroupElement.querySelector("input");
    if (input.value === "") {
      inputGroupElement.classList.add("error");
      inputGroupElement.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
    } else if (input.type === "email" && !input.value.match(validEmail)) {
      inputGroupElement.classList.add("error");
      inputGroupElement.nextElementSibling.textContent =
        "Looks like this is not an email";
    } else {
      inputGroupElement.classList.remove("error");
    }
  });
});
