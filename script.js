const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.querySelector("#email");
const contactNum = document.querySelector("#contactNum");
const password = document.querySelector("#password");
const confirmPw = document.querySelector("#confirmPassword");
const showPw = document.querySelector("#showPw");
const main = document.querySelector('main');
const thankYou = document.querySelector('.thankYou');
const footer = document.querySelector('footer');
const submitForm = document.querySelector('form')
const body = document.querySelector('body')

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "Kindly enter a valid email address e.g email@yahoo.com"
    );
  } else {
    email.setCustomValidity("");
  }
});

confirmPw.addEventListener("input", (e) => {
  if (confirmPw.value !== password.value) {
    confirmPw.setCustomValidity("Password not matched");
  } else {
    confirmPw.setCustomValidity("");
  }
});
showPw.addEventListener("click", (e) => {
  if (password.type == "password") {
    password.type = "text";
    confirmPw.type = "text";
  } else {
    password.type = "password";
    confirmPw.type = "password";
  }
});

submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    main.style.display = 'none';
    body.classList.add('flex')
    thankYou.style.display = 'block';
    footer.style.display = 'flex'
})