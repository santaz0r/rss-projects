import htmlToElement from "../../utils/htmlToElement";
import popUpHTML from "./index.html";
import "./popup.scss";

const PopUp = ({ img, title, latin, audio, info }) => {
  const element = htmlToElement(popUpHTML);
  const wrapper = element.querySelector(".popup__item");
  const popupImg = element.querySelector(".popup__img");
  const popupTitle = element.querySelector(".popup__title");
  const popupLatin = element.querySelector(".popup__latin");
  const popupAudio = element.querySelector(".popup__audio");
  const popupinfo = element.querySelector(".popup__description");
  const popupClose = element.querySelector(".popup__close");

  const body = document.body;

  popupImg.src = img;
  popupImg.alt = title;
  popupTitle.textContent = title;
  popupLatin.textContent = latin;
  popupAudio.append(audio);
  popupinfo.textContent = info;

  body.append(element);

  const handleClose = () => {
    element.remove();
  };

  const coords = window.pageYOffset;

  wrapper.style.top = coords + "px";
  popupClose.addEventListener("click", handleClose);
  return element;
};

export default PopUp;
