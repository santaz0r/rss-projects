import addRecord from "./addRecord.js";
import renderAboutCheatPopup from "./renderAboutCheatPopup.js";
import renderControlsBtns from "./renderControlsBtns.js";
import renderGameSettings from "./renderGameSettings.js";
import renderInfoWrapper from "./renderInfoWrapper.js";
import renderWinnerOverlay from "./renderWinnerOverlay.js";
import saveGame from "./saveGame.js";
import commonSwap from "./utils/commonSwap.js";
import isFinished from "./utils/isFinished.js";
import playAudio from "./utils/playAudio.js";
import randomShuffle from "./utils/randomShuffle.js";

function renderGame(data) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const {
    name,
    mode,
    items: loadItems,
    steps: loadSteps,
    time: loadTime,
  } = data;
  let isCheatMode = false;
  let isMuted = false;
  const isMobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );
  const hasGrid = document.querySelector(".gem_puzzle");
  if (hasGrid) hasGrid.remove();
  const container = document.querySelector(".container");
  container.innerHTML = "";
  container.prepend(overlay);

  const gameWrapper = document.createElement("div");
  gameWrapper.className = "wrapper_game";
  const gemPuzzle = document.createElement("div");
  gemPuzzle.className = `gem_puzzle size-${mode}`;

  const infoWrapper = renderInfoWrapper(name, loadSteps, loadTime);
  const counterEl = infoWrapper.querySelector(".player_counter");
  const startTimer = infoWrapper.querySelector(".player_timer");

  const gameContainer = document.createElement("div");
  gameContainer.className = "game_container";
  gameContainer.append(infoWrapper, gemPuzzle);

  const time = !loadTime ? startTimer.textContent.split(" ")[1] : loadTime;
  const arr = time.split(":");
  let minutes = +arr[0];
  let seconds = +arr[1];

  gameWrapper.append(gameContainer);
  container.append(gameWrapper);
  const grid = mode ** 2;

  const itemSize = gemPuzzle.offsetWidth / mode;
  let timerId;
  function renderGrid() {
    let counter = !loadSteps ? 0 : loadSteps;
    let isStarted = false;
    const items = [];
    const randomArr = randomShuffle(grid);
    for (let i = 0; i <= grid - 1; i++) {
      const item = document.createElement("div");

      const rightValue = loadItems ? loadItems[i].rightValue : randomArr[i];
      item.className = "item";
      item.textContent = rightValue + 1;

      const left = loadItems ? loadItems[i].left : i % mode;
      const top = loadItems ? loadItems[i].top : (i - left) / mode;

      if (
        !loadItems
          ? rightValue === undefined
          : rightValue === loadItems.length - 1
      ) {
        item.className = "item empty";
        item.textContent = "";
      }

      items.push({
        rightValue: rightValue === undefined ? grid - 1 : rightValue,
        left: left,
        top: top,
        el: item,
      });

      item.style.left = `${left * itemSize}px`;
      item.style.top = `${top * itemSize}px`;
      gemPuzzle.append(item);

      if (rightValue !== undefined) {
        item.addEventListener("click", () => {
          swap(i);
        });

        item.addEventListener("dragstart", (e) => {
          dragStart(e, i);
        });
      }
      item.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      item.addEventListener("dragenter", (e) => {
        dragEnter(e);
      });
      item.addEventListener("dragleave", (e) => {
        dragLeave(e);
      });
      item.addEventListener("drop", (e) => {
        dragDrop(e, i);
      });
    }
    if (!loadItems) {
      const maxShuffle = (mode * 10) / 2 + 5;
      let shuffleTimer;
      let shuffleCount = 0;
      if (shuffleCount === 0) {
        shuffleTimer = setInterval(() => {
          rightSwap(items);
          shuffleCount++;
          if (shuffleCount >= maxShuffle) {
            clearInterval(shuffleTimer);
          }
        }, 2);
      }
      let blockedItem = null;

      function rightSwap(items) {
        const emptyItem = items[items.length - 1];
        const validCoords = findValidCoords({ emptyItem, items, blockedItem });
        const randomItem =
          validCoords[Math.floor(Math.random() * validCoords.length)];

        commonSwap(randomItem, emptyItem, itemSize);
        blockedItem = randomItem;
      }
      function findValidCoords({ emptyItem, items, blockedItem }) {
        const validCoords = [];
        items.forEach((i) => {
          const diffX = Math.abs(emptyItem.left - i.left);
          const diffY = Math.abs(emptyItem.top - i.top);

          if (diffX + diffY <= 1 && diffX + diffY !== 0) {
            if (
              !blockedItem ||
              !(blockedItem.left === i.left && blockedItem.top === i.top)
            )
              validCoords.push(i);
          }
        });
        return validCoords;
      }
    }

    function dragEnter(e) {
      e.target.classList.add("over");
    }
    function dragLeave(e) {
      e.target.classList.remove("over");
    }
    function dragDrop(e, index) {
      e.target.classList.remove("over");
      const startItemIndex = e.dataTransfer.getData("itemId");
      const startItem = items[startItemIndex];

      const dropItem = items[index];

      cheaterSwap(startItem, dropItem);
    }
    function dragStart(e, index) {
      e.dataTransfer.setData("itemId", index);
    }

    const emptyItem = items[grid - 1];
    function cheaterSwap(startItem, dropItem) {
      if (!isMuted) {
        playAudio();
      }
      commonSwap(startItem, dropItem, itemSize);

      if (isFinished(items, mode)) {
        clearInterval(timerId);
        return console.log("Вы победили, хоть и с читами");
      }
    }

    function swap(index) {
      const item = items[index];
      const diffX = Math.abs(emptyItem.left - item.left);
      const diffY = Math.abs(emptyItem.top - item.top);

      if (diffX + diffY > 1)
        return console.log(
          "Двигать можно только соседние ячейки строго по вертикали и горизонтали"
        );
      commonSwap(item, emptyItem, itemSize);
      if (!isMuted) {
        playAudio();
      }

      if (!isStarted) {
        timerId = setInterval(timer, 1000);
        function timer() {
          seconds++;
          saveData.time = `${minutes}:${seconds}`;

          if (seconds > 59) {
            seconds = 0;
            minutes++;
          }

          let str = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
          startTimer.textContent = `Time: ${str}`;
        }
      }
      isStarted = true;
      counter++;
      saveData.steps = counter;
      counterEl.textContent = `Steps: ${counter}`;
      if (isFinished(items, mode)) {
        clearInterval(timerId);
        isStarted = false;
        renderWinnerOverlay(saveData, isCheatMode);

        if (!isCheatMode) addRecord(saveData);
      }
    }

    const {
      cheatBtn,
      restartBtn,
      otherGridBtn,
      saveBtn,
      muteBtn,
      info,
      mainMenu,
    } = renderControlsBtns();

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "controls";
    controlsContainer.append(
      cheatBtn,
      info,
      restartBtn,
      otherGridBtn,
      saveBtn,
      muteBtn,
      mainMenu
    );

    if (isMobile) {
      cheatBtn.disabled = true;
      cheatBtn.style.pointerEvents = "none";
    }
    gameWrapper.append(controlsContainer);

    cheatBtn.addEventListener("click", () => {
      isCheatMode = true;
      items.forEach((i) => {
        i.el.draggable ? (i.el.draggable = false) : (i.el.draggable = true);
      });
      if (isCheatMode) {
        cheatBtn.textContent = "Cheat mode activated";
        cheatBtn.classList.add("button_cheat_active");
        saveBtn.classList.add("button_cheat_active");
      }

      counterEl.textContent = `Steps: 0`;
      startTimer.textContent = `Time: 00:00`;
      minutes = 0;
      seconds = 0;
      counter = 0;
      clearInterval(timerId);
      saveBtn.disabled = true;
      cheatBtn.disabled = true;
    });

    restartBtn.addEventListener("click", () => {
      gemPuzzle.innerHTML = "";
      counterEl.textContent = `Steps: 0`;
      startTimer.textContent = `Time: 00:00`;
      minutes = 0;
      seconds = 0;
      clearInterval(timerId);
      restartBtn.remove();
      otherGridBtn.remove();
      saveBtn.remove();
      cheatBtn.remove();
      renderGame({ name, mode });
    });
    otherGridBtn.addEventListener("click", () => {
      renderGameSettings(name);
    });
    let saveData = {
      name: name,
      mode: mode,
      steps: counter,
      items: items,
      time: `${minutes}:${seconds}`,
    };

    saveBtn.addEventListener("click", () => {
      saveGame(saveData);
    });
    function toggleMute() {
      isMuted ? (isMuted = false) : (isMuted = true);
    }
    muteBtn.addEventListener("click", () => {
      toggleMute();
      if (isMuted) {
        muteBtn.classList.add("button_mute_active");
        muteBtn.textContent = "Sound muted";
      } else {
        muteBtn.classList.remove("button_mute_active");
        muteBtn.textContent = "Mute";
      }
    });
    info.addEventListener("click", () => {
      renderAboutCheatPopup();
    });
  }

  renderGrid();
}

export default renderGame;
