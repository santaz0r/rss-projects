import htmlToElement from "../../utils/htmlToElement";
import quizTableHTML from "./index.html";
import BirdAnswer from "../BirdAnswer";
import "./quiz.scss";
import birdTypes from "../../data/birdTypes";
import ChosenItem from "../ChosenItem";
import AudioElement from "../Audio";
import randomNumber from "../../utils/randomNumber";
import answerSound from "../../utils/answerSound";
import wrongSound from "./assets/wrong-sound.mp3";
import correctSound from "./assets/correct-sound.mp3";
import quizPageLangs from "../../data/translations/quizPageLangs";

const quizTable = ({ level, score, btnNext, birdsData, lang }) => {
  const element = htmlToElement(quizTableHTML);
  const list = element.querySelector(".quiz__birds-list");
  const totalScore = element.querySelector(".quiz__score");
  const hiddenBirdAudio = element.querySelector(".quiz__guess-bird-audio");
  const hiddenBirdTitle = element.querySelector(".quiz__guess-bird-title");
  const hiddenBirdImg = element.querySelector(".quiz__guess-bird-img");

  btnNext.disabled = true;

  totalScore.textContent = `${quizPageLangs.score[lang]} ${score}`;

  birdTypes.forEach((i, index) => {
    const div = document.createElement("div");
    div.textContent = i.name[lang];
    div.className = "birds-list list-item";
    if (index === level) div.classList.add("level-active");
    list.append(div);
  });

  let isGuessing = true;
  let levelScoreMax = 5;
  const hiddenBirdIndex = randomNumber(1, birdsData[level].length);
  const hiddenBird = birdsData[level].find((i) => i.id === hiddenBirdIndex);

  console.log(
    "Для простоты проверки\n",
    "Спрятанная птица: => ",
    hiddenBird.name[lang]
  );

  hiddenBirdAudio.append(AudioElement({ song: hiddenBird.audio }));

  const quizAnswersList = element.querySelector(".quiz__answers-birds");
  const quizChosenItem = element.querySelector(".quiz__answers-chosen");
  const instructions = element.querySelector(".instructions");
  instructions.textContent = quizPageLangs.instructions[lang];

  const chooseItem = (e) => {
    instructions.remove();
    const card = quizChosenItem.querySelector(".card");
    if (card) {
      card.remove();
    }
    const { target } = e;
    const el = target.closest(".birds-item.bird");

    if (!el) return;

    checkBird(el);

    const chosenItem = birdsData[level].find(
      (i) => i.name[lang] === el.textContent.trim()
    );

    const item = ChosenItem({
      image: chosenItem.image,
      title: chosenItem.name[lang],
      latin: chosenItem.species,
      audio: AudioElement({
        song: chosenItem.audio,
      }),
      descr: chosenItem.description[lang],
    });
    quizChosenItem.append(item);
  };

  birdsData[level].forEach((i) => {
    const bird = BirdAnswer({
      birdName: i.name[lang],
      className: "bird",
      onclick: (e) => chooseItem(e),
    });
    quizAnswersList.append(bird);
  });

  const checkBird = (target) => {
    if (target.textContent.trim() === hiddenBird.name[lang]) {
      target.classList.add("right");
      hiddenBirdTitle.textContent = hiddenBird.name[lang];
      hiddenBirdImg.classList.add("correct");
      hiddenBirdImg.src = hiddenBird.image;

      const hiddenAudio = hiddenBirdAudio.querySelector(".audio");
      const playBtn = hiddenBirdAudio.querySelector(".play-btn");

      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      hiddenAudio.pause();
      if (isGuessing) answerSound(correctSound);
      isGuessing = false;

      btnNext.disabled = false;
      totalScore.textContent = `${quizPageLangs.score[lang]} ${
        levelScoreMax + score
      }`;
    } else {
      if (isGuessing && !target.classList.contains("wrong")) {
        levelScoreMax--;
        btnNext.disabled = true;
        target.classList.add("wrong");
        answerSound(wrongSound);
      }
    }
  };

  return element;
};

export default quizTable;
