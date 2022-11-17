const convertTime = ({ time }) => {
  if (time === 0) return "00:00";
  const minutes = Math.floor(time / 60).toString();
  const seconds = Math.floor(time % 60).toString();
  return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

export default convertTime;
