function renderAboutCheatPopup() {
  const popup = document.createElement("div");
  popup.className = "cheat_popup ";

  popup.innerHTML = `
    <div class="cheat_popup-item">
       <span class='cheat_popup-close'>&times;</span>
        By activating cheat-mode, you can freely move the tiles between them.
        <br>
        However, you will lose the ability to save the game and you will not be included in the high score lists.
        <br>
        <br>
        <span>Play fair :)</span>
        <div class="cheat_popup-descr">Doesn't support on mobiles</div>
    </div>
  `;
  document.body.prepend(popup);
  setTimeout(() => popup.classList.add("cheat_popup-active"), 0);

  const close = popup.querySelector(".cheat_popup-close");
  close.addEventListener("click", handleClick);
  popup.addEventListener("click", handleClick);

  function handleClick(e) {
    if (e.target !== popup && e.target !== close) return;
    popup.classList.remove("cheat_popup-active");
    setTimeout(() => {
      popup.remove();
    }, 300);
  }
}

export default renderAboutCheatPopup;
