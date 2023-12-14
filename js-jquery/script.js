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

// Function to open the popup
function openPopup() {
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
    event.preventDefault();

    return;
  }
  if (!content) {
    alert("Phiền bạn điền nội dung trước khi gửi.");
    event.preventDefault();

    return;
  }
  if (!phone) {
    alert("Phiền bạn điền số điện thoại trước khi gửi.");
    event.preventDefault();

    return;
  }

  if (validateEmail(email) && validatePhone(phone)) {
    // return true;
    document.getElementById("popup").style.display = "block";

    document.getElementById(
      "popup-infor"
    ).innerHTML = `Cảm ơn bạn đã liên hệ cho tôi!<br>
      Thông tin của bạn gồm:<br>
      Email: ${email} <br>
      Họ tên: ${name} <br>
      Nội dung: ${content} <br>
      Số điện thoại: ${phone} <br>
      `;
    event.preventDefault();
    // location.reload();
    return;
  } else {
    alert(`Cảm ơn bạn đã liên hệ cho tôi!
    Nhưng email hoặc số điện thoại của bạn không đúng định dạng.
    Mời bạn nhập lại thông tin.
    `);
    // event.preventDefault();

    return;
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
  location.reload();
}
