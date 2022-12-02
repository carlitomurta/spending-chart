const bars = document.querySelectorAll(".bar");

if (bars) {
  bars.forEach((el) => {
    el.style.height = `${el.getAttribute("data-value")}%`;
  });
}
