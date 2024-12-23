document.querySelectorAll('#menu-items-box a').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
  
      const targetId = this.getAttribute('href').substring(1); // Lấy ID của phần muốn cuộn đến
      const targetElement = document.getElementById(targetId);
  
      // Cuộn đến phần có ID tương ứng
      targetElement.scrollIntoView({
        behavior: 'smooth', // Cuộn mượt mà
        block: 'start'      // Đặt phần đầu tiên của phần nội dung vào đầu viewport
      });
    });
  });
  