import pagesName from "../../data/pageNames";
import htmlToElement from "../../utils/htmlToElement";
import Anchor from "../Anchor";
import overlayHTML from "./index.html";
import "./overlay.scss";

const Overlay = ({ title, text, isMaxScore, lang }) => {
  const element = htmlToElement(overlayHTML);
  const overlayTitle = element.querySelector(".overlay__title");
  const overlayInfo = element.querySelector(".overlay__info");
  const overlayBtnsContainer = element.querySelector(".overlay__buttons");
  overlayTitle.textContent = title;
  overlayInfo.textContent = text;

  const anchorMainMenu = Anchor({
    className: !isMaxScore ? "overlay__btn" : "overlay__btn" + " alone",
    title: pagesName[0].again[lang],
    pathTo: pagesName[0].path,
  });
  const anchorRetry = Anchor({
    className: "overlay__btn",
    title: pagesName[1].again[lang],
    pathTo: pagesName[1].path,
  });

  if (isMaxScore) {
    overlayBtnsContainer.append(anchorMainMenu);
  } else {
    overlayBtnsContainer.append(anchorMainMenu);
    overlayBtnsContainer.append(anchorRetry);
  }

  return element;
};

export default Overlay;
