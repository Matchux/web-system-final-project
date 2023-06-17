const signoutBtn = document.getElementById('signout');

// user logout
if (signoutBtn) {

    signoutBtn.addEventListener('click', function () {
        location.replace('login.html');
    });
}

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
    null
};