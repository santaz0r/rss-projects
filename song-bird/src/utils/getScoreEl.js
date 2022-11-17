const getScoreEl = () => {
  const element = document.querySelector(".quiz__score");
  if (element) {
    const score = element.textContent.match(/\d/g).join("");
    return +score;
  } else {
    return 0;
  }
};

export default getScoreEl;
