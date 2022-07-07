const emailInput = document.getElementById("email");
const btn = document.querySelector("button");
const errorIcon = document.querySelector(".error-icon");
const errormessage = document.querySelector(".error-message");

function errorSignal() {
  emailInput.classList.add("invalid");
  errorIcon.classList.remove("hidden");
  errormessage.classList.remove("hidden");
}
function removeWarning() {
  emailInput.classList.remove("invalid");
  errorIcon.classList.add("hidden");
  errormessage.classList.add("hidden");
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!emailInput.validity.valid) {
    errorSignal();
  } else {
    removeWarning();
  }
});

emailInput.addEventListener("input", removeWarning);
