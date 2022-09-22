op = true;

function sommaire() {
  if (op == true) {
    $(".opacity").css("opacity", "0");
    op = false;
    setTimeout(function () {
      $(".opacity").css("visibility", "hidden");
    }, 400);
  } else {
    $(".opacity").css({ opacity: "1", visibility: "visible" });
    op = true;
  }
}
