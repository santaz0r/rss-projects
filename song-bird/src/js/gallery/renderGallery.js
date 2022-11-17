import AudioElement from "../../components/Audio";
import BirdCard from "../../components/BirdCard";
import PageUp from "../../components/Pageup";

const renderGallery = ({ gallery, birdsData, lang }) => {
  const anchor = document.querySelectorAll(".header__menu-link")[2];
  anchor.classList.add("header__menu-link_active");

  const container = document.createElement("div");
  container.className = "container";
  const birdsWrapper = document.createElement("div");
  birdsWrapper.className = "birds";
  container.append(birdsWrapper);
  const pageUpEl = PageUp();
  container.append(pageUpEl);

  gallery.append(container);

  function showModalByScroll() {
    const maxScrollHeight = document.documentElement.scrollHeight;
    const afterToScroll = 5;

    if ((maxScrollHeight * afterToScroll) / 100 <= window.pageYOffset) {
      pageUpEl.classList.add("active");
    } else {
      pageUpEl.classList.remove("active");
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  const flatData = birdsData.flatMap((i) => i);
  flatData.forEach((i, index) => {
    const card = BirdCard({
      data: flatData[index],
      image: i.image,
      title: i.name[lang],
      latin: i.species,
      lang: lang,
    });

    birdsWrapper.append(card);
  });
};

export default renderGallery;
