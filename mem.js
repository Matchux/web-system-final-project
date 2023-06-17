let firstname = document.getElementById('firstname');

firstname.innerText = localStorage.getItem('username');
firstname.style.color = '#4285f4';
// alert(firstname.innerText);

let user = document.getElementById('usr');

user.innerText = localStorage.getItem('username');
user.style.color = '#F1C40F';