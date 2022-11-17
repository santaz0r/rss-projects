const renderPhrase = (number, lang) => {
  const isRuLang = lang === "ru";
  const lastOne = Number(number.toString().slice(-1));
  if (number > 4 && number < 15) {
    return isRuLang ? "баллов" : "points";
  }
  if (lastOne === 1) return isRuLang ? "балл" : "point";
  if ([2, 3, 4].indexOf(lastOne) >= 0) return isRuLang ? "балла" : "points";
  return isRuLang ? "баллов" : "points";
};

export default renderPhrase;
