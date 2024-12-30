const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelector('.sign-in form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.querySelector('.sign-in form input[type="email"]').value;
    const password = document.querySelector('.sign-in form input[type="password"]').value;

    if (email && password) {
        showNotification('Đăng nhập thành công!', 'Đi đến trang chủ', function () {
            window.location.href = '../index.html';
        });
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin đăng nhập!', 'OK');
    }
});

document.querySelector('.sign-up form').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.querySelector('.sign-up form input[placeholder="Họ tên"]').value;
    const email = document.querySelector('.sign-up form input[type="email"]').value;
    const password = document.querySelector('.sign-up form input[type="password"]').value;
    const phoneNumber = document.querySelector('.sign-up form input[placeholder="Số điện thoại"]').value;
    const address = document.querySelector('.sign-up form input[placeholder="Địa chỉ"]').value;

    if (fullName && email && password && phoneNumber && address) {
        showNotification('Bạn đã đăng ký thành công, vui lòng đăng nhập!', 'OK', function () {
            container.classList.remove("active");
        });
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin đăng ký!', 'OK');
    }
});

function showNotification(message, buttonText, callback) {
    const notificationText = document.getElementById('notificationText');
    const notificationButton = document.getElementById('notificationButton');
    const notificationBox = document.getElementById('notification');
    const notificationBackground = document.getElementById('notificationBackground');

    notificationText.innerText = message;
    notificationButton.innerText = buttonText;

    notificationButton.onclick = function () {
        notificationBox.style.display = 'none';
        notificationBackground.style.display = 'none';
        if (callback && typeof callback === 'function') {
            callback();
        }
    };

    notificationBox.style.display = 'block';
    notificationBackground.style.display = 'block';
}
