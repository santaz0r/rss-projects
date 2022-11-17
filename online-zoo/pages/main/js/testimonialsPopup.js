window.addEventListener("DOMContentLoaded", () => {
  if (document.body.clientWidth < 1000) {
    const overlay = document.querySelector(".overlay");
    const carousel = document.querySelector(".testimonials__carousel");

    const handleOverflow = () => {
      document.body.style.overflow
        ? (document.body.style.overflow = "")
        : (document.body.style.overflow = "hidden");
    };

    const removeOverlay = () => {
      overlay.classList.remove("overlay_active");
      setTimeout(() => {
        overlay.innerHTML = "";
      }, 300);
      handleOverflow();
    };

    const handlePopupClick = (e) => {
      const { target } = e;

      const element = target.closest(".testimonials__item");
      if (!element) return;
      overlay.classList.toggle("overlay_active");

      const clone = element.cloneNode(true);
      clone.classList.remove("testimonials__item");
      clone.classList.add("testimonials__item_active");

      const div = document.createElement("div");
      div.classList.add("popup_wrapper");
      const span = document.createElement("span");
      span.classList.add("popup_close");
      span.addEventListener("click", removeOverlay);

      div.append(clone, span);

      overlay.innerHTML = "";
      overlay.prepend(div);

      handleOverflow();
    };

    carousel.addEventListener("click", handlePopupClick);
  }
});
