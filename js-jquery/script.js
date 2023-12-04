function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function validateEmail(email) {
  // Biểu thức chính quy cho địa chỉ email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Kiểm tra định dạng email
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Biểu thức chính quy cho số điện thoại (định dạng +12 (345) 678-9012)
  const phoneRegex = /^\d{10}$/;

  // Kiểm tra định dạng số điện thoại
  return phoneRegex.test(phone);
}

// Sử dụng hàm validateEmai

function infor() {
  // Get input values
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var content = document.getElementById("content").value;
  var phone = document.getElementById("phone").value;

  // Validate input
  if (!email) {
    window.alert("Phiền bạn điền email trước khi gửi.");
    event.preventDefault();
    return;
  }
  if (!name) {
    alert("Phiền bạn điền họ tên trước khi gửi.");
    return;
  }
  if (!content) {
    alert("Phiền bạn điền nội dung trước khi gửi.");
    return;
  }
  if (!phone) {
    alert("Phiền bạn điền số điện thoại trước khi gửi.");
    return;
  }

  if (validateEmail(email) && validatePhone(phone)) {
    // return true;
    alert(`Cảm ơn bạn đã liên hệ cho tôi!
          Thông tin của bạn gồm:
          Email: ${email}
          Họ tên: ${name}
          Nội dung: ${content}
          Số điện thoại: ${phone}
          `);
    return;
  } else {
    alert(`Cảm ơn bạn đã liên hệ cho tôi!
    Nhưng email hoặc số điện thoại của bạn không đúng định dạng.
    Mời bạn nhập lại thông tin.
    `);
    event.preventDefault();

    return;
    // console.log("Địa chỉ email không hợp lệ");
  }

  // Perform calculation based on the selected operation
}
