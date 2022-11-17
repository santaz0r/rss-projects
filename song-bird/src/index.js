import "./index.scss";

import header from "./components/Header";
import renderMainPage from "./js/mainPage/renderMainPage";
import renderQuizPage from "./js/quizPage/renderQuizPage";
import footer from "./components/Footer";
import getLaguage from "./utils/getLaguage";
import renderGallery from "./js/gallery/renderGallery";
import birdsData from "./data/birds";

const page = document.querySelector(".page");
const main = page.querySelector(".main");
const quiz = page.querySelector(".quiz");
const gallery = page.querySelector(".gallery");

const lang = getLaguage();

page.prepend(header);
page.append(footer);

if (main) renderMainPage({ main: main, lang: lang });
if (quiz) renderQuizPage({ quiz: quiz, birdsData: birdsData, lang: lang });
if (gallery)
  renderGallery({ gallery: gallery, birdsData: birdsData, lang: lang });
