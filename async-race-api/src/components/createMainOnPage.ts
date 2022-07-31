import { createElementOnPage } from "./createElementOnPage";

export function createMainOnPage() {
  const body = document.querySelector('body') as HTMLElement;
  const main = createElementOnPage('main', 'main');
  body.append(main);
}