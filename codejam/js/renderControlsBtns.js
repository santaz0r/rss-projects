import gameInit from "./gameInit.js";

function renderControlsBtns() {
  const cheatBtn = document.createElement("button");
  cheatBtn.className = "button button_cheat";
  cheatBtn.textContent = "Enable cheat mode";

  const restartBtn = document.createElement("button");
  restartBtn.className = "button button_restart";
  restartBtn.textContent = "Restart game";

  const otherGridBtn = document.createElement("button");
  otherGridBtn.className = "button button_other";
  otherGridBtn.textContent = "Choose other grid";

  const saveBtn = document.createElement("button");
  saveBtn.className = "button button_save";
  saveBtn.textContent = "Save your progress";

  const muteBtn = document.createElement("button");
  muteBtn.className = "button button_mute";
  muteBtn.textContent = "Mute";

  const info = document.createElement("span");
  info.className = "cheat_info";
  info.textContent = "About cheatmode";

  const mainMenu = document.createElement("button");
  mainMenu.className = "button button_main-menu button_main-menu_controls";
  mainMenu.textContent = "Main menu";

  mainMenu.addEventListener("click", handleClick);

  function handleClick() {
    document.body.innerHTML = "";
    gameInit();
  }
  return {
    cheatBtn,
    info,
    restartBtn,
    otherGridBtn,
    saveBtn,
    muteBtn,
    mainMenu,
  };
}

export default renderControlsBtns;
