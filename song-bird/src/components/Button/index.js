import htmlToElement from "../../utils/htmlToElement";
import ButtonHTML from "./index.html";
import "./button.scss";

const Button = ({ onclick, title, className }) => {
  const buttonElement = htmlToElement(ButtonHTML);
  buttonElement.textContent = title;
  buttonElement.classList.add(className);
  buttonElement.addEventListener("click", onclick);
  return buttonElement;
};

export default Button;
