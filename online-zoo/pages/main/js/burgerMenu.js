window.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const headerLogo = document.querySelector(".header__logo");
  const logoName = document.querySelector(".logo__name");

  const headerMenu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  const headerInfo = document.querySelector(".header__info");

  const handleClick = () => {
    burgerMenu.classList.toggle("burger-menu_active");
    headerLogo.classList.toggle("header__logo-active");
    logoName.classList.toggle("logo__name-active");
    headerMenu.classList.toggle("header__menu-active");
    headerInfo.classList.toggle("header__info_active");

    overlay.classList.toggle("overlay_active");
    document.body.style.overflow
      ? (document.body.style.overflow = "")
      : (document.body.style.overflow = "hidden");
  };

  const handleOverlayClick = (e) => {
    burgerMenu.classList.remove("burger-menu_active");
    headerLogo.classList.remove("header__logo-active");
    logoName.classList.remove("logo__name-active");
    headerMenu.classList.remove("header__menu-active");
    headerInfo.classList.remove("header__info_active");
    if (e.target !== overlay) return;
    overlay.classList.remove("overlay_active");
    document.body.style.overflow
      ? (document.body.style.overflow = "")
      : (document.body.style.overflow = "hidden");
    setTimeout(() => {
      overlay.innerHTML = "";
    }, 300);
  };

  overlay.addEventListener("click", handleOverlayClick);
  burgerMenu.addEventListener("click", handleClick);
});
