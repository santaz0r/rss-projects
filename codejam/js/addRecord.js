function addRecord(data) {
  const { name, mode, steps, time } = data;
  const newRecord = { name, mode, steps, time };
  const recTime = newRecord.time.split(":");
  const newM = recTime[0];
  const newS = recTime[1];
  const totalTime = newS + newM * 60;

  if (!localStorage.getItem("records")) {
    const records = [];
    records.push(newRecord);
    localStorage.setItem("records", JSON.stringify(records));
  } else {
    const records = JSON.parse(localStorage.getItem("records"));

    if (
      !records.some(
        (i) => i.name.toLowerCase() === newRecord.name.toLowerCase()
      )
    ) {
      records.push(newRecord);
      localStorage.setItem("records", JSON.stringify(records));
    } else if (
      !records.some(
        (i) =>
          i.mode === newRecord.mode &&
          i.name.toLowerCase() === newRecord.name.toLowerCase()
      )
    ) {
      records.push(newRecord);
      localStorage.setItem("records", JSON.stringify(records));
    } else {
      const oldElIndex = records.findIndex(
        (i) =>
          i.name.toLowerCase() === newRecord.name.toLowerCase() &&
          i.mode.toLowerCase() === newRecord.mode.toLowerCase()
      );

      const oldElement = records[oldElIndex];

      const oldTime = oldElement.time.split(":");
      const oldM = oldTime[0];
      const oldS = oldTime[1];
      const totalOldTime = oldS + oldM * 60;
      if (+totalTime < +totalOldTime) {
        records[oldElIndex] = newRecord;
        localStorage.setItem("records", JSON.stringify(records));
      } else if (+totalTime === +totalOldTime) {
        if (newRecord.steps < oldElement.steps) {
          records[oldElIndex] = newRecord;
          localStorage.setItem("records", JSON.stringify(records));
        }
      }
    }
  }
}

export default addRecord;
