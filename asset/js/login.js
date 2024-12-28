document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        showNotification('Đăng nhập thành công!', 'Đi đến trang chủ', function () {
            window.location.href = '../index.html';
        });
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin đăng nhập!', 'OK');
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const password = document.getElementById('Password').value;
    const agree = document.getElementById('agree').checked;

    if (!agree) {
        showNotification('Bạn chưa đồng ý với các điều khoản!', 'OK');
        return;
    }

    if (fullName && address && phoneNumber && password) {
        showNotification('Bạn đã đăng ký thành công, vui lòng đăng nhập!', 'OK', function () {
            document.getElementById('loginUsername').focus();
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
