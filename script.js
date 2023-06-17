// inputs
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const input = document.querySelectorAll('input');

// forms
const registrationForm = document.querySelector('#register');
const loginForm = document.querySelector('#login');

// errors
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const message = document.querySelector('span');


// user register
if (registrationForm) {

  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const min = 5;

    if (usernameValue === '') {
      usernameError.innerText = 'USERNAME IS REQUIRED.'
      usernameError.classList.add('error');
      username.style.border = '2px solid red';

    } else if (usernameValue.length < min) {
      usernameError.innerText = 'MINIMUM LENGTH REQUIRED IS 5.';
      usernameError.classList.add('error');
      username.style.border = '2px solid red';

    } else if (!validUsername(usernameValue)) {
      usernameError.innerText = 'USERNAME IS NOT VALID.';
      usernameError.classList.add('error');
      username.style.border = '2px solid red';

    } else {
      localStorage.setItem('username', usernameValue);
      usernameError.innerText = '';
      username.style.border = '2px solid green';
    }


    if (emailValue === '') {
      emailError.innerText = 'EMAIL ADDRESS IS REQUIRED.';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else if (!validEmail(emailValue)) {
      emailError.innerText = 'EMAIL ADDRESS IS NOT VALID.';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else {
      localStorage.setItem('email', emailValue);
      emailError.innerText = '';
      email.style.border = '2px solid green';
    }


    if (passwordValue === '') {
      passwordError.innerText = 'PASSWORD IS REQUIRED.';
      passwordError.classList.add('error');
      password.style.border = '2px solid red';

    } else if (!validPassword(passwordValue)) {
      passwordError.innerText = 'MINIMUM LENGTH REQUIRED IS 8. \n AT LEAST ONE LETTER, ONE NUMBER, \n AND ONE SPECIAL CHARACTER IS REQUIRED.';
      passwordError.classList.add('error');
      password.style.border = '2px solid red';

    } else {
      localStorage.setItem('password', passwordValue);
      passwordError.innerText = '';
      password.style.border = '2px solid green';
    }


    const getUsername = localStorage.getItem('username');
    const getEmail = localStorage.getItem('email');
    const getPassword = localStorage.getItem('password');


    const getRegister = getUsername && getEmail && getPassword;
    const getRegisterValue = usernameValue && emailValue && passwordValue;


    if (getRegisterValue === '') {
      message.innerText = 'ALL FIELDS ARE REQUIRED.';
      message.classList.remove('successful-message');
      message.classList.add('error-message');



    } else if (getRegister != null) {
      message.innerText = 'ACCOUNT SUCCESSFULLY CREATED.';
      message.classList.remove('error-message');
      message.classList.add('successful-message');

      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }

    }
  });
}


// regular expressions
function validUsername(username) {
  const re = /^[a-zA-Z]+$/;
  return re.test(username);
}

function validEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validPassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
}



//user login
if (loginForm) {

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    const getUsername = localStorage.getItem('username');
    const getPasword = localStorage.getItem('password');


    if (usernameValue === getUsername && passwordValue === getPasword) {
      location.href = 'mem.html';

    } else if (usernameValue === '' || passwordValue === '') {
      message.innerText = 'USERNAME AND PASSWORD ARE REQUIRED.';
      message.classList.add('error-message');
      username.style.border = '2px solid red';
      password.style.border = '2px solid red';

    } else if (!validUsername(usernameValue)) {
      message.innerText = 'USERNAME IS NOT VALID';
      message.classList.add('error-message');

    } else {
      message.innerText = 'INVALID USERNAME OR PASSWORD.';
      message.classList.add('error-message');
      email.style.border = '2px solid red';
      password.style.border = '2px solid red';
    }
  });

}