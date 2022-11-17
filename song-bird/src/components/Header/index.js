import getLaguage from "../../utils/getLaguage";
import htmlToElement from "../../utils/htmlToElement";
import headerNav from "../Nav";
import Header from "./index.html";

import "./header.scss";
import { getPagesLength } from "../../data/pageNames";

const lang = getLaguage();

const header = htmlToElement(Header);
const headerContainer = header.querySelector(".header__wrapper");
const headNav = headerNav({
  ulCLass: "header__menu",
  liCouter: getPagesLength(),
  liClass: "header__menu-item",
  aClass: "header__menu-link",
  lang: lang,
});

headerContainer.append(headNav);

export default header;
