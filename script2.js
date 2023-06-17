function loginAction() {
    let username = document.querySelector('#logUsername').value;
    let password = document.querySelector('#logPassword').value;


    localStorage.getItem('username', username.value)
    localStorage.getItem('password', password.value)

    let user = localStorage.getItem('user');
    let key = JSON.parse(user);

    if (username == '' && password == '') {
        alert('Missing Input!');
    } else if ((username == key.username || username == key['email']) && password == key.password) {
        alert('Successfully Logged in!');
        location.href = 'mem.html';
        return false;
    } else {
        alert('User Not Found!');
    }
}