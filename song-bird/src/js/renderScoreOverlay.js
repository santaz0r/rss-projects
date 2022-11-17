import Overlay from "../components/Overlay";
import overlayLangs from "../data/translations/overlayLangs";
import renderPhrase from "../utils/renderPhrase";

const renderScoreOverlay = ({ currentScore, maxScore, lang }) => {
  const body = document.body;
  const str = overlayLangs[lang].results
    .replace("{{score}}", `${currentScore} ${renderPhrase(currentScore, lang)}`)
    .replace("{{maxScore}}", maxScore);
  const isMaxScore = currentScore === maxScore;

  const overlay = Overlay({
    title: overlayLangs[lang].title,
    text: str,
    isMaxScore: isMaxScore,
    lang: lang,
  });

  window.scrollTo(0, 0);

  body.style.overflow = "hidden";
  body.prepend(overlay);
};
export default renderScoreOverlay;
