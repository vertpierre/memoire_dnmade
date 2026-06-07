let op = true;

function sommaire() {
  const elements = document.querySelectorAll(".opacity");
  if (op === true) {
    elements.forEach((el) => {
      el.style.opacity = "0";
    });
    op = false;
    setTimeout(() => {
      elements.forEach((el) => {
        el.style.visibility = "hidden";
      });
    }, 400);
  } else {
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.visibility = "visible";
    });
    op = true;
  }
}
