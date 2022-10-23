import renderGameSettings from "./renderGameSettings.js";
import renderHighscores from "./renderHighscores.js";
import renderSaves from "./renderSaves.js";
function gameInit() {
  const body = document.body;
  const container = document.createElement("div");
  container.className = "container";
  body.prepend(container);

  const gameTitle = document.createElement("h1");
  gameTitle.className = "main-title";
  gameTitle.textContent = "Gem puzzle";

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "btn_wrapper";

  const newGameBtn = document.createElement("button");
  newGameBtn.className = "button button_newgame";
  newGameBtn.textContent = "New Game";

  const loadingBtn = document.createElement("button");
  loadingBtn.className = "button button_loading";
  loadingBtn.textContent = "Load a game";

  const champoinsBtn = document.createElement("button");
  champoinsBtn.className = "button button_champ";
  champoinsBtn.textContent = "Highscores";

  const mainWrapper = document.createElement("div");
  mainWrapper.className = "main-wrapper";

  btnWrapper.append(newGameBtn, loadingBtn, champoinsBtn);
  mainWrapper.append(gameTitle, btnWrapper);

  container.append(mainWrapper);
  newGameBtn.addEventListener("click", () => {
    renderGameSettings();
  });
  champoinsBtn.addEventListener("click", () => {
    renderHighscores();
  });
  loadingBtn.addEventListener("click", () => {
    renderSaves();
  });
}
gameInit();

export default gameInit;
