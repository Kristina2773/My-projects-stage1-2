export function createElementOnPage(document: Document, htmlElement: string, elemClass: string): HTMLElement {
  const newElem = document.createElement(htmlElement);
  newElem.classList.add(elemClass);
  return newElem;
}
