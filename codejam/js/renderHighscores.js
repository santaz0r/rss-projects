import gameInit from "./gameInit.js";

function renderHighscores() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const records = localStorage.getItem("records")
    ? JSON.parse(localStorage.getItem("records"))
    : null;

  container.innerHTML = `
        <h2 class="highscores__title">Highscores</h2>
        <div class="highscores__filter"> Filter: 
            <span class="highscores__grid">3x3</span>
            <span class="highscores__grid highscores__grid_active">4x4</span>
            <span class="highscores__grid">5x5</span>
            <span class="highscores__grid">6x6</span>
            <span class="highscores__grid">7x7</span>
            <span class="highscores__grid">8x8</span>
        </div>
        <div class="highscores__wrapper">
           ${filter(records, "4")}
        </div>
        
        <button class="button button_main-menu highscores__btn">Main menu</button>

    `;

  const filterBtn = document.querySelector(".highscores__filter");
  const gridItems = document.querySelectorAll(".highscores__grid");

  filterBtn.addEventListener("click", (e) => {
    gridItems.forEach((i) => i.classList.remove("highscores__grid_active"));
    const { target } = e;
    const el = target.closest(".highscores__grid");
    if (!el) return;
    el.classList.add("highscores__grid_active");
    const mode = el.textContent[0];
    highscoresWrapper.innerHTML = "";
    highscoresWrapper.innerHTML = filter(records, mode);
  });
  const highscoresWrapper = document.querySelector(".highscores__wrapper");

  function filter(arr, mode) {
    if (!arr)
      return '<div class="highscores__empty">Nobody has played yet</div>';
    const newArr = arr.filter((i) => {
      return i.mode === mode;
    });
    newArr.sort((a, b) => {
      return (
        new Date(+a.time.split(":").join("")) -
        new Date(+b.time.split(":").join(""))
      );
    });
    if (newArr.length === 0)
      return '<div class="highscores__empty">Nobody has played this size yet</div>';

    if (newArr.length > 10) newArr.splice(10);
    return newArr
      .map((i, index) => {
        return `<div class="highscores__item">
               <div class="highscores__item-el"><span>#${index + 1}</span></div>
                <div class="highscores__item-el"><span>Player name:</span> ${
                  i.name
                }</div>
                <div class="highscores__item-el"><span>Grid size:</span> ${
                  i.mode
                }</div>
                <div class="highscores__item-el"><span>Steps:</span> ${
                  i.steps
                }</div>
                <div class="highscores__item-el"><span>Time:</span> ${i.time
                  .split(":")[0]
                  .padStart(2, "0")}:${i.time
          .split(":")[1]
          .padStart(2, "0")}</div>
                
              </div>`;
      })
      .join("");
  }

  const mainMenuBtn = document.querySelector(".button_main-menu");
  mainMenuBtn.addEventListener("click", handleClick);

  function handleClick() {
    document.body.innerHTML = "";
    gameInit();
  }
}

export default renderHighscores;
