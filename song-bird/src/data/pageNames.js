const pagesName = [
  {
    name: {
      ru: "Главная",
      en: "Main",
    },
    again: {
      ru: "На\u00A0главную",
      en: "Main\u00A0menu",
    },
    path: "./index.html",
  },
  {
    name: {
      ru: "Викторина",
      en: "Quiz\u00A0page",
    },

    again: {
      ru: "Повторить",
      en: "Try\u00A0again",
    },
    path: "./song-bird.html",
  },
  {
    name: {
      ru: "Галерея",
      en: "Gallery",
    },

    path: "./gallery.html",
  },
];
export default pagesName;

export const getPagesLength = () => {
  return pagesName.length;
};
