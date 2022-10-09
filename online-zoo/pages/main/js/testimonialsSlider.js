window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".testimonials__scroll");
  const sliderContainer = document.querySelectorAll(".testimonials__carousel");
  const clientWidth = document.body.clientWidth;
  const multiplier =
    clientWidth >= 1600 ? 25.6 : clientWidth >= 1000 ? 34 : null;

  function translateLeft() {
    sliderContainer.forEach((i) => {
      i.style.left = `-${input.value * multiplier}%`;
    });
  }
  input.addEventListener("input", translateLeft);
});
