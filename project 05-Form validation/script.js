let emailInputEl = document.querySelector("#email");
let passwordInputEl = document.querySelector("#password");
let formEl = document.querySelector("#form");

let emailErrorEl = document.querySelector("#errorEmail");
let passwordErrorEl = document.querySelector("#errorPassword");
let formCorrectEl = document.querySelector("#formCorrect");

let okButtonEl = document.querySelector("#ok");
let clearButtonEl = document.querySelector("#clear");
let windowEl = document.querySelector("#window");

let isEmailCorrect = false;
let isPasswordCorrect = false;

emailInputEl.addEventListener("input", () => {
  if (
    emailInputEl.value.length <= 3 ||
    !emailInputEl.value.includes("@") ||
    !emailInputEl.value.includes(".")
  ) {
    isEmailCorrect = false;
    emailErrorEl.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    emailErrorEl.classList.remove("hide");
    formCorrectEl.classList.add("hide");
  } else {
    isEmailCorrect = true;
    emailErrorEl.classList.add("hide");
  }

  checkFormValid();
});

passwordInputEl.addEventListener("input", () => {
  if (passwordInputEl.value.length < 8) {
    isPasswordCorrect = false;
    passwordErrorEl.textContent = "Make sure password is more than 8 characters.";
    passwordErrorEl.classList.remove("hide");
    formCorrectEl.classList.add("hide");
  } else {
    isPasswordCorrect = true;
    passwordErrorEl.classList.add("hide");
  }

  checkFormValid();
});

function checkFormValid() {
  if (isEmailCorrect && isPasswordCorrect) {
    formCorrectEl.classList.remove("hide");
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isEmailCorrect && isPasswordCorrect) {
    formEl.classList.add("hide");
    windowEl.classList.remove("hide");
    windowEl.classList.add("formAnimation");
  }
});

function resetForm() {
  formEl.classList.remove("hide");

  emailInputEl.value = "";
  passwordInputEl.value = "";

  emailErrorEl.classList.add("hide");
  passwordErrorEl.classList.add("hide");
  formCorrectEl.classList.add("hide");

  windowEl.classList.add("hide");
  windowEl.classList.remove("formAnimation");

  isEmailCorrect = false;
  isPasswordCorrect = false;
}

okButtonEl.addEventListener("click", () => {
  alert("Successful signup!");
  resetForm();
});

clearButtonEl.addEventListener("click", () => {
  resetForm();
});
