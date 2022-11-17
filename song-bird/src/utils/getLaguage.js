const getLaguage = () => {
  const defaultLang = "ru";
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", defaultLang);
    return localStorage.getItem("language");
  }
  return localStorage.getItem("language");
};

export default getLaguage;
