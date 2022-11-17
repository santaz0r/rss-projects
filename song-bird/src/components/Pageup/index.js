import image from "./assets/circle-up.svg";
import "./pageup.scss";

const PageUp = () => {
  const pageUp = document.createElement("a");
  const pageUpImg = document.createElement("img");
  pageUp.href = "#";
  pageUp.className = "page-up";
  pageUpImg.src = image;
  pageUp.append(pageUpImg);
  return pageUp;
};
export default PageUp;
