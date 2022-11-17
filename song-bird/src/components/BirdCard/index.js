import htmlToElement from "../../utils/htmlToElement";
import BirdCardHTML from "./index.html";
import "./card.scss";
import Button from "../Button";
import buttonsLang from "../../data/translations/buttonsLang";
import PopUp from "../PopUp";
import AudioElement from "../Audio";

const BirdCard = ({ image, title, latin, lang, data, coords }) => {
  const element = htmlToElement(BirdCardHTML);
  const cardImg = element.querySelector(".item__img");
  const cardTitle = element.querySelector(".item__title");
  const cardLatin = element.querySelector(".item__latin");

  cardImg.src = image;
  cardImg.alt = title;
  cardTitle.textContent = title;
  cardLatin.textContent = latin;

  const handleClick = () => {
    PopUp({
      img: data.image,
      title: data.name[lang],
      latin: data.species,
      info: data.description[lang],
      audio: AudioElement({ song: data.audio }),
    });
  };

  const btn = Button({
    className: "item__btn",
    onclick: handleClick,
    title: buttonsLang.gallery[lang],
  });
  element.appendChild(btn);
  return element;
};

export default BirdCard;
