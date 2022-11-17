const setLanguage = (data) => {
  localStorage.setItem("language", data);
  setTimeout(() => {
    window.location.reload();
  }, 300);
};

export default setLanguage;
