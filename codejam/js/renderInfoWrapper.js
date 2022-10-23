function renderInfoWrapper(name, steps, time) {
  let minutes;
  let seconds;
  if (time) {
    const arr = time.split(":");
    minutes = +arr[0];
    seconds = +arr[1];
  }

  const infoWrapper = document.createElement("div");
  infoWrapper.className = "wrapper_info";

  const playerName = document.createElement("div");
  playerName.className = "player_name";
  playerName.textContent = `User: ${name}`;

  const stepsCounter = document.createElement("div");
  stepsCounter.className = "player_counter";
  stepsCounter.textContent = `Steps: ${steps ? steps : 0}`;

  const timer = document.createElement("div");
  timer.className = "player_timer";
  timer.textContent = `Time: ${
    time
      ? minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0")
      : "00:00"
  }`;

  infoWrapper.append(playerName, stepsCounter, timer);

  return infoWrapper;
}
export default renderInfoWrapper;
