export function createElementOnPage(
  htmlElement: string,
  elemClass: string,
) {
  const newElem = document.createElement(htmlElement);
  newElem.classList.add(elemClass);
  return newElem;
}
