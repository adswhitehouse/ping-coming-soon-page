// Variables
const formInput = document.querySelector(".jsFormInput");
const formBtn = document.querySelector(".jsFormBtn");
const errorMsg = document.querySelector(".jsErrorMsg");

console.log(formBtn);

// Email verification
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hi");
  if (formInput.value == "") {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    formInput.classList.add("error-border");
    errorMsg.classList.add("error-msg-display");
  } else if (!emailRegex.test(formInput.value)) {
    errorMsg.textContent = "Please provide a valid email";
    formInput.classList.add("error-border");
    errorMsg.classList.add("error-msg-display");
  } else {
    formInput.classList.remove("error-border");
    errorMsg.classList.remove("error-msg-display");
  }
});
