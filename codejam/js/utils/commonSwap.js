function commonSwap(item, dropItem, itemSize) {
  dropItem.el.style.left = item.el.style.left;
  dropItem.el.style.top = item.el.style.top;
  item.el.style.left = `${dropItem.left * itemSize}px`;
  item.el.style.top = `${dropItem.top * itemSize}px`;

  const { left, top } = dropItem;
  dropItem.left = item.left;
  dropItem.top = item.top;

  item.left = left;
  item.top = top;
}

export default commonSwap;
