import htmlToElement from "../../utils/htmlToElement";
import ChosenItemHTML from "./index.html";

import "./chosen.scss";

const ChosenItem = ({ image, title, latin, audio, descr }) => {
  const element = htmlToElement(ChosenItemHTML);
  const cardImg = element.querySelector(".card__img");
  const cardTitle = element.querySelector(".card__title");
  const cardLatin = element.querySelector(".card__latin");
  const cardAudio = element.querySelector(".card__audio");
  const cardDescr = element.querySelector(".card__footer");
  cardImg.src = image;
  cardImg.alt = title;
  cardTitle.textContent = title;
  cardLatin.textContent = latin;
  cardAudio.append(audio);
  cardDescr.textContent = descr;

  return element;
};

export default ChosenItem;
