const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.querySelector("input").value;
  if (inputValue === "" || inputValue.indexOf("@") === -1) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
