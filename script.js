function changeColor(element, newColor, backColor) {
  element.style.color = newColor;
  element.parentElement.style.backgroundColor = backColor;
  element.parentElement.style.borderRadius = "8px";
  element.parentElement.style.padding = "1rem";
  element.style.paddingTop = "1rem";
}
