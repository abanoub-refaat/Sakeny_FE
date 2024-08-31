"use strict";

const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

//Adding the event listener for the submit btn
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formValidation()) form.submit();
});

function formValidation() {
  let isValid = true;
  //Checking for empty and not equal passwords.
  if (fname.value === "") {
    isValid = false;
    document.querySelector(".fname-error").style.display = "block";
  } else if (lname.value === "") {
    isValid = false;
    document.querySelector(".lname-error").style.display = "block";
  } else if (email.value === "") {
    isValid = false;
    document.querySelector(".email-error").style.display = "block";
  } else if (password.value === "") {
    isValid = false;
    document.querySelector(".pass-error").style.display = "block";
  } else if (confirmPassword.value !== password.value) {
    isValid = false;
    document.querySelector(".confirm-pass-error").style.display = "block";
  } else {
    isValid = true;
  }
  return isValid;
}

// Restting the error messages
fname.addEventListener("input", () => {
  document.querySelector(".fname-error").style.display = "none";
});
lname.addEventListener("input", () => {
  document.querySelector(".lname-error").style.display = "none";
});
email.addEventListener("input", () => {
  document.querySelector(".email-error").style.display = "none";
});
password.addEventListener("input", () => {
  document.querySelector(".pass-error").style.display = "none";
});
confirmPassword.addEventListener("input", () => {
  document.querySelector(".confirm-pass-error").style.display = "none";
});
