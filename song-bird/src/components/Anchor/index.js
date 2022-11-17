const Anchor = ({ title, className, pathTo }) => {
  const element = document.createElement("a");
  element.href = pathTo;
  element.textContent = title;
  element.className = className;

  return element;
};

export default Anchor;
