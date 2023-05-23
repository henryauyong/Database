const btn = document.getElementById('redirect');
btn.addEventListener('click', redirect);

function redirect() {
    location.replace('http://localhost:3000/success.html');
}