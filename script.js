function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function infor() {
  // Get input values
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var content = document.getElementById("content").value;
  var phone = document.getElementById("phone").value;

  // Validate input
  if (!email) {
    window.alert("Phiền bạn điền email trước khi gửi.");
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

  alert(`Cảm ơn bạn đã liên hệ cho tôi!
        Thông tin của bạn gồm:
        Email: ${email}
        Họ tên: ${name}
        Nội dung: ${content}
        Số điện thoại: ${phone}
        `);
  return;
  // Perform calculation based on the selected operation
}
