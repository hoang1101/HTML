// ham khoi tao
$(document).ready(function () {
  headerclick();
  aboutme();
});

// cac ham con
function aboutme() {
  $("#details-container-experience").click(function () {
    $("#experience-infor").animate({ height: "toggle" }, 2000);
    $("#details-container-experience").css("background-color", "#afaaaa");
    $("#details-container-education").css("background-color", "white");
    $("#education-infor").hide();
  });
  $("#details-container-education").click(function () {
    $("#education-infor").animate({ height: "toggle" }, 2000);
    $("#details-container-experience").css("background-color", "white");
    $("#details-container-education").css("background-color", "#afaaaa");
    $("#experience-infor").hide();
  });
}

function headerclick() {}
