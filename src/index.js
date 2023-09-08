const emailEl = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const userEmail = document.querySelector(".user-email");
const errorMsg = document.querySelector(".error-msg");
const mainPage = document.querySelector(".main-page");
const pageSuccess = document.querySelector(".page-success");
const emailInput = document.querySelector("input");
console.log(mainPage, pageSuccess, emailEl);
// console.log(emailEl);
const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

emailEl.addEventListener("keyup", function () {
  errorMsg.textContent = "";
  emailEl.classList.remove("error");

  const email = emailEl.value;
  console.log(email);

  if (email.match(regex)) {
    userEmail.textcontent = email;
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.remove("bg-slate-800");
    submitBtn.classList.add("bg-red-500");

    console.log("hellllo 😑");
    console.log(submitBtn);
  } else {
    submitBtn.setAttribute("disabled", "");
    submitBtn.classList.remove("bg-red-500");
    submitBtn.classList.add("bg-slate-800");
    errorMsg.textContent = "Valid input required";
    emailEl.classList.add("error");
  }
});
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mainPage.classList.add("hidden");
  pageSuccess.classList.remove("hidden");
  userEmail.textContent = emailEl.value;
});
