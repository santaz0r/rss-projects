import htmlToElement from "../../utils/htmlToElement";
import Anchor from "../Anchor";
import Nav from "./index.html";
import pagesName from "../../data/pageNames";

const headerNav = ({ ulCLass, liCouter, liClass, aClass, lang }) => {
  const element = htmlToElement(Nav);
  const ul = document.createElement("ul");
  ul.classList.add(ulCLass);
  for (let i = 0; i < liCouter; i++) {
    const li = document.createElement("li");
    li.classList.add(liClass);

    const a = Anchor({
      title: pagesName[i].name[lang],
      className: aClass,
      pathTo: pagesName[i].path,
    });
    li.append(a);
    ul.append(li);
  }
  element.append(ul);
  return element;
};

export default headerNav;
