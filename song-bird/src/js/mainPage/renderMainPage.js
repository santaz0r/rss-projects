import mainPage from "../../components/MainMenu";
import consoleScore from "../../utils/consoleScore";

const renderMainPage = ({ main, lang }) => {
  const anchor = document.querySelectorAll(".header__menu-link")[0];
  anchor.classList.add("header__menu-link_active");

  const mainPageEl = mainPage({ lang: lang });

  main.append(mainPageEl);

  consoleScore();
};

export default renderMainPage;
