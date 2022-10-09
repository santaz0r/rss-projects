window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".animals__carousel_wrapper");
  const slideItems = document.querySelectorAll(".animals__wrapper-item");

  const clonedItems = Array.from(slideItems);

  const newArray = [];

  clonedItems.forEach((i) => {
    newArray.push(i);
  });

  const newCarousel = document.createElement("div");
  newCarousel.classList.add("animals__carousel");

  container.append(newCarousel);
  /////////////////////////////////////////////////////

  const slides = document.querySelectorAll(".animals__carousel");
  const controlLeft = document.querySelector(".animals__arrow-left");
  const controlRight = document.querySelector(".animals__arrow-right");
  let currentItem = 0;
  let isEnabled = true;

  function changeCurrentItem(n) {
    currentItem = (n + slides.length) % slides.length;
  }

  function shuffleNodes() {
    const sordetArray = sortRandom(newArray);
    slides[currentItem].innerHTML = "";
    sordetArray.forEach((i) => {
      const clone = i.cloneNode(true);
      slides[currentItem].append(clone);
    });
  }

  function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
    shuffleNodes();
  }

  function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
    shuffleNodes();
  }

  function hideItem(direction) {
    isEnabled = false;
    slides[currentItem].classList.add(direction);
    slides[currentItem].addEventListener("animationend", function () {
      this.classList.remove("animals__carousel_active", direction);
    });
  }

  function showItem(direction) {
    slides[currentItem].classList.add("next", direction);
    slides[currentItem].addEventListener("animationend", function () {
      this.classList.remove("next", direction);
      this.classList.add("animals__carousel_active");
      isEnabled = true;
    });
  }

  controlLeft.addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });
  controlRight.addEventListener("click", function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

  function sortRandom(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
