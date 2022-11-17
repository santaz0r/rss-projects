import pagesName from "../../data/pageNames";
import htmlToElement from "../../utils/htmlToElement";
import setLanguage from "../../utils/setLanguage";
import Anchor from "../Anchor";
import MainPageHTML from "./index.html";

import "./menu.scss";

const mainPage = ({ lang }) => {
  const element = htmlToElement(MainPageHTML);
  const mainBtnsWrapper = element.querySelector(".main__btns");

  const checkbox = element.querySelector(".checkbox-lang");

  lang === "en" ? (checkbox.checked = true) : (checkbox.checked = false);

  const handleChange = (e) => {
    const { target } = e;
    if (target.checked) {
      setLanguage("en");
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
      setLanguage("ru");
    }
  };

  const quizBtn = Anchor({
    className: "main__btn btn__quiz",
    pathTo: pagesName[1].path,
    title: pagesName[1].name[lang],
  });
  const galleryBtn = Anchor({
    className: "main__btn btn__gallery",
    pathTo: pagesName[2].path,
    title: pagesName[2].name[lang],
  });
  mainBtnsWrapper.append(quizBtn, galleryBtn);
  checkbox.addEventListener("change", handleChange);
  return element;
};

export default mainPage;
