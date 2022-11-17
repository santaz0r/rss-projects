import gameInit from "./gameInit.js";

function renderWinnerOverlay(data, isCheatMode) {
  const { name, mode, steps, time } = data;
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay_active");
  const arr = time.split(":");
  let m = arr[0].padStart(2, "0");
  let s = arr[1].padStart(2, "0");

  const winner = document.createElement("div");
  winner.className = "winner";
  winner.innerHTML = `
    <h3 class="winner__title">You are the winner!!</h3>
    <div class="winner__info">
    ${
      isCheatMode
        ? `Congratulations! You are the winner with cheat mode!!!`
        : `<div class="winner__item"><span>Name:</span> ${name}</div>
    <div class="winner__item"><span>Size:</span> ${mode}x${mode}</div>
    <div class="winner__item"><span>Steps:</span> ${steps}</div>
    <div class="winner__item"><span>Time:</span> ${m}:${s}</div>`
    }
        
    </div>
    <button class="button button_main-menu">Main menu</button>
  `;
  overlay.append(winner);
  const mainMenuBtn = document.querySelector(".button_main-menu");
  mainMenuBtn.addEventListener("click", handleClick);

  function handleClick() {
    document.body.innerHTML = "";
    gameInit();
  }
}

export default renderWinnerOverlay;
