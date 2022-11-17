function isFinished(arr, mode) {
  return arr.every((i) => {
    return i.rightValue === i.top * mode + i.left;
  });
}

export default isFinished;
