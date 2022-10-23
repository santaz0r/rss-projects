import renderGame from "./gemPuzzle.js";
import validator from "./utils/validator.js";

function renderGameSettings(string = "") {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const settingsWrapper = document.createElement("div");
  settingsWrapper.className = "settings";
  container.append(settingsWrapper);
  const label = document.createElement("label");
  label.className = "nickname_label";
  label.innerHTML = "<h2>Enter your nickname</h2>";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.maxLength = 10;
  nameInput.minLength = 1;
  nameInput.required = true;
  nameInput.value = string;
  nameInput.placeholder = "your nickname";
  label.append(nameInput);

  const gameModeContainer = document.createElement("div");
  gameModeContainer.className = "game_mods";
  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = "Choose a game mode";
  gameModeContainer.append(title);

  const startBtn = document.createElement("button");
  startBtn.className = "button button_start";
  startBtn.textContent = "Start!";

  settingsWrapper.append(label, gameModeContainer, startBtn);

  for (let i = 3; i <= 8; i++) {
    const modeElement = document.createElement("div");
    modeElement.className = "mod";
    if (i === 4) modeElement.classList.add("active");
    modeElement.textContent = `${i}x${i}`;
    gameModeContainer.append(modeElement);
  }
  const data = { name: "", mode: "4" };

  const mods = document.querySelectorAll(".mod");
  gameModeContainer.addEventListener("click", (e) => {
    mods.forEach((i) => {
      i.classList.remove("active");
    });
    const { target } = e;
    const element = target.closest(".mod");
    if (!element) return;
    element.classList.add("active");
    const mode = element.textContent[0];
    data.mode = mode;
  });
  const span = document.createElement("span");
  span.className = "error";
  span.textContent = "Use only letters [a-z] or/with numbers";
  label.append(span);
  nameInput.addEventListener("input", () => {
    nameInput.classList.remove("wrong");
    span.style.opacity = "0";
    data.name = nameInput.value;
  });

  startBtn.addEventListener("click", () => {
    if (validator(nameInput.value)) {
      nameInput.classList.remove("wrong");
      data.name = nameInput.value;
      renderGame(data);
    } else {
      nameInput.classList.add("wrong");
      span.style.opacity = "1";
    }
  });
}

export default renderGameSettings;
