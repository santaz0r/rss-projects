import changeIcon from "../../utils/changeIcon";
import convertTime from "../../utils/convertTime";
import htmlToElement from "../../utils/htmlToElement";
import audioHTML from "./index.html";
import "./audio.scss";

const AudioElement = ({ song }) => {
  const element = htmlToElement(audioHTML);

  const playBtn = element.querySelector(".play-btn");
  const audio = element.querySelector(".audio");
  const progressInput = element.querySelector(".progress__input");
  const controls = element.querySelector(".controls");
  const loader = element.querySelector(".loader");
  const currentTimeProgress = element.querySelector(".time-current");
  const songDuration = element.querySelector(".time-duration");
  const valueInput = element.querySelector(".volume__input");
  const volumeIcon = element.querySelector(".volume");

  controls.classList.add("loading");

  function loaderFunc() {
    if (audio.currentTime === 0) {
      progressInput.value = 0;
    }
    controls.classList.remove("loading");
    loader.classList.add("disabled");
    songDuration.textContent = convertTime({ time: audio.duration });
    currentTimeProgress.textContent = convertTime({ time: audio.currentTime });
  }

  loadSong(song);

  function loadSong(url) {
    audio.src = url;
  }

  function playSong() {
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");

    audio.play();
  }

  function pauseSong() {
    playBtn.classList.remove("play");
    playBtn.classList.add("pause");
    audio.pause();
  }

  function stopSong() {
    playBtn.classList.remove("play");
    playBtn.classList.add("pause");
    progressInput.style.backgroundSize = `0% 100%`;

    audio.currentTime = 0;
    audio.pause();
  }

  function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPrecent = Math.floor((currentTime / duration) * 100);
    progressInput.style.backgroundSize = `${progressPrecent}% 100%`;
    progressInput.value = Math.floor(progressPrecent);
    currentTimeProgress.textContent = convertTime({ time: currentTime });
  }

  function changeVolume() {
    const max = valueInput.max / 100;
    const value = valueInput.value / 100;
    valueInput.style.backgroundSize = (value * 100) / max + "% 100%";
    audio.volume = value;
    changeIcon(value, volumeIcon, "muted");
  }

  function setProgress() {
    const max = progressInput.max / 100;
    const value = progressInput.value;
    audio.currentTime = (value / 100) * audio.duration;
    progressInput.style.backgroundSize = value / max + "% 100%";
  }

  function muteSound() {
    audio.volume = 0;
    const isMuted = volumeIcon.classList.contains("muted");
    if (isMuted) {
      volumeIcon.classList.remove("muted");
      valueInput.style.backgroundSize = "30% 100%";
      audio.volume = 0.3;
      valueInput.value = 30;
    } else {
      volumeIcon.classList.add("muted");
      valueInput.style.backgroundSize = "0% 100%";
      valueInput.value = 0;
    }
  }

  playBtn.addEventListener("click", () => {
    const isPlay = playBtn.classList.contains("play");
    isPlay ? pauseSong() : playSong();
  });

  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("ended", stopSong);
  audio.addEventListener("canplaythrough", loaderFunc, false);
  volumeIcon.addEventListener("click", muteSound);
  valueInput.addEventListener("input", changeVolume);
  progressInput.addEventListener("input", setProgress);

  return element;
};
export default AudioElement;
