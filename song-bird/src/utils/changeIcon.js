const changeIcon = (value, node, className) => {
  value === 0
    ? node.classList.add(className)
    : node.classList.remove(className);
};

export default changeIcon;
