import gameInit from "./gameInit.js";
import renderSavedGame from "./renderSavedGame.js";

function renderSaves() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const saves = localStorage.getItem("saves")
    ? JSON.parse(localStorage.getItem("saves"))
    : null;

  container.innerHTML = `
        <h2 class="saves__title">Saves</h2>
        
        <div class="saves__wrapper">
           ${
             !saves
               ? `<div class="saves__empty">Nobody has played yet</div>`
               : saves
                   .map((i, index) => {
                     return `
            <div class="saves__item">
                <div class="saves__top">
                    <span>#${index + 1}</span>
                </div>
                <div class="saves__name">
                    <span>Player name:</span> ${i.name}
                </div>
                <div class="saves__mode">
                    <span>Grid size:</span> ${i.mode}
                </div>
                <div class="saves__steps">
                    <span>Steps:</span> ${i.steps}
                </div>
                <div class="saves__time">
                    <span>Time:</span> ${i.time
                      .split(":")[0]
                      .padStart(2, "0")}:${i.time
                       .split(":")[1]
                       .padStart(2, "0")}
                </div>
                <button class="button load__button">
                    Load
                </button>
           </div>`;
                   })
                   .join("")
           }
        </div>
        
        <button class="button button_main-menu highscores__btn">Main menu</button>

    `;
  const mainMenuBtn = document.querySelector(".button_main-menu");
  mainMenuBtn.addEventListener("click", handleClick);

  const savesContainer = document.querySelector(".saves__wrapper");

  savesContainer.addEventListener("click", (e) => {
    load(e);
  });

  function load(e) {
    const { target } = e;
    const el = target.closest(".load__button");
    if (!el) return;
    const index = +el.parentNode.childNodes[1].textContent.trim().slice(1) - 1;
    const currentGame = saves[index];
    renderSavedGame(currentGame);
  }

  function handleClick() {
    document.body.innerHTML = "";
    gameInit();
  }
}

export default renderSaves;
