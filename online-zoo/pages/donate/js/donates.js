window.addEventListener("DOMContentLoaded", () => {
  const dotsContainer = document.querySelector(".donate__feed-progress_bar");
  const dots = document.querySelectorAll(".donate__feed-circle");
  const pricesContainer = document.querySelector(".donate__feed-prices");
  const prices = document.querySelectorAll(".donate__feed-price");
  const input = document.querySelector(".feed-input");

  const dotsArr = Array.from(dots);
  const priceArr = Array.from(prices);

  const removeClass = () => {
    dots.forEach((i) => i.classList.remove("donate__feed-circle-active"));
    prices.forEach((i) => i.classList.remove("donate__feed-price-active"));
  };

  const addClass = (index) => {
    dots[index].classList.add("donate__feed-circle-active");
    prices[index].classList.add("donate__feed-price-active");
  };

  const setActive = (el, arr) => {
    const index = arr.findIndex((i) => i === el);
    removeClass();
    addClass(index);

    const newValue = prices[index].textContent.slice(
      1,
      prices[index].textContent.length
    );

    input.value = newValue;
  };

  const handleClick = (arr, classList) => {
    return function (e) {
      const { target } = e;
      const element = target.closest(classList);
      if (!element) return;
      setActive(element, arr);
    };
  };

  const handleInput = () => {
    const value = input.value;
    input.value = input.value.replace(/^0+/, "");
    if (value.length > 4) {
      input.value = input.value.slice(0, 4);
    } else {
      const inputIndex = priceArr.findIndex(
        (i) => i.textContent.slice(1, i.textContent.length) === value
      );

      removeClass();
      if (inputIndex > -1) addClass(inputIndex);
    }
  };

  dotsContainer.addEventListener(
    "click",
    handleClick(dotsArr, ".donate__feed-circle")
  );
  pricesContainer.addEventListener(
    "click",
    handleClick(priceArr, ".donate__feed-price")
  );
  input.addEventListener("input", handleInput);
});
