"use strict";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//Adding the event listener for the submit btn
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formValidation()) form.submit();
});

//Form Validation
function formValidation() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === "") {
    document.querySelector(".email-error").style.display = "block";
    return false;
  } else if (passwordValue === "") {
    document.querySelector(".pass-error").style.display = "block";
    return false;
  } else {
    return true;
  }
}

email.addEventListener("input", () => {
  document.querySelector(".email-error").style.display = "none";
});
password.addEventListener("input", () => {
  document.querySelector(".pass-error").style.display = "none";
});
