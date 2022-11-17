import htmlToElement from "../../utils/htmlToElement";
import BirdAnswerHTML from "./index.html";
import "./birds.scss";

const BirdAnswer = ({ onclick, birdName, className }) => {
  const element = htmlToElement(BirdAnswerHTML);
  element.insertAdjacentHTML("beforeend", birdName);
  element.classList.add(className);
  element.addEventListener("click", onclick);
  return element;
};

export default BirdAnswer;
