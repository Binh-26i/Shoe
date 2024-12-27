document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng hành động mặc định (không tải lại trang)
    // Kiểm tra thông tin đăng nhập
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username && password) {
        // Giả sử thông tin đăng nhập thành công
        showNotification('Đăng nhập thành công!', 'Đi đến trang chủ', function () {
            window.location.href = '../index.html'; // Thay đổi URL trang chủ
        });
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin đăng nhập!', 'OK');
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng hành động mặc định (không tải lại trang)
    // Kiểm tra thông tin đăng ký
    var fullName = document.getElementById('fullName').value;
    var passWord = document.getElementById('Password').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('PhoneNumber').value;
    var agree = document.getElementById('agree').checked;

    if (!agree) {
        showNotification('Bạn chưa đồng ý với các điều khoản!', 'OK');
        return;
    }

    if (fullName && passWord && address && phoneNumber) {
        // Giả sử thông tin đăng ký thành công
        showNotification('Bạn đã đăng ký thành công, vui lòng đăng nhập!', 'OK', function () {
            document.getElementById('loginUsername').focus(); // Đưa người dùng trở lại đăng nhập
        });
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin đăng ký!', 'OK');
    }
});

// Hàm hiển thị thông báo
function showNotification(message, buttonText, callback) {
    var notificationText = document.getElementById('notificationText');
    var notificationButton = document.getElementById('notificationButton');
    var notificationBox = document.getElementById('notification');

    notificationText.innerText = message;
    notificationButton.innerText = buttonText;

    // Xóa sự kiện click trước đó để tránh lặp lại
    notificationButton.onclick = null;

    // Gán sự kiện click mới
    notificationButton.onclick = function () {
        notificationBox.style.display = 'none';
        if (callback && typeof callback === 'function') {
            callback();
        }
    };

    // Hiển thị thông báo
    notificationBox.style.display = 'block';
}
