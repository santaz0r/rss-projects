const answerSound = (path) => {
  const audio = new Audio();
  audio.src = path;
  audio.volume = 0.3;
  audio.play();
};

export default answerSound;
