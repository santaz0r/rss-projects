function saveGame(data) {
  const { name, mode, items, steps, time } = data;
  const newSave = { name, mode, items, steps, time };

  if (!localStorage.getItem("saves")) {
    const saves = [];
    saves.push(newSave);
    localStorage.setItem("saves", JSON.stringify(saves));
  } else {
    const saves = JSON.parse(localStorage.getItem("saves"));

    if (
      !saves.some((i) => i.name.toLowerCase() === newSave.name.toLowerCase())
    ) {
      saves.push(newSave);
      localStorage.setItem("saves", JSON.stringify(saves));
    } else if (
      !saves.some(
        (i) =>
          i.mode === newSave.mode &&
          i.name.toLowerCase() === newSave.name.toLowerCase()
      )
    ) {
      saves.push(newSave);
      localStorage.setItem("saves", JSON.stringify(saves));
    } else {
      const oldElIndex = saves.findIndex(
        (i) =>
          i.name.toLowerCase() === newSave.name.toLowerCase() &&
          i.mode === newSave.mode
      );
      saves[oldElIndex] = newSave;
      localStorage.setItem("saves", JSON.stringify(saves));
    }
  }
}

export default saveGame;
