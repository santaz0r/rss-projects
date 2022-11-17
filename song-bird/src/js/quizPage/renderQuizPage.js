import Button from "../../components/Button";
import quizTable from "../../components/quizTable";
import buttonsLang from "../../data/translations/buttonsLang";
import getScoreEl from "../../utils/getScoreEl";
import renderScoreOverlay from "../renderScoreOverlay";

const renderQuizPage = ({ quiz, birdsData, lang }) => {
  const anchor = document.querySelectorAll(".header__menu-link")[1];
  anchor.classList.add("header__menu-link_active");
  const totalLevels = 5;

  const maxScore = 30;
  let level = 0;
  let totalScore = 0;
  function render() {
    if (level <= totalLevels) {
      totalScore = getScoreEl();
      quiz.innerHTML = "";

      const quizTableElem = quizTable({
        level: level,
        score: totalScore,
        btnNext: button,
        birdsData: birdsData,
        lang: lang,
      });

      quiz.append(quizTableElem);
      const quizWrapper = document.querySelector(".quiz__wrapper");
      quizWrapper.append(button);
      level++;
    } else {
      renderScoreOverlay({
        currentScore: getScoreEl(),
        maxScore: maxScore,
        lang: lang,
      });
    }
  }

  const button = Button({
    className: "quiz__button",
    title: buttonsLang.step[lang],
    onclick: render,
  });

  render();
};

export default renderQuizPage;
