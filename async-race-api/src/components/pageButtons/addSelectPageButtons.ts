import './pageButtons.css';
import { createElementOnPage } from '../createElementOnPage';

export function addSelectPageButtons() {
  const selectBtnSection = createElementOnPage('section', 'select-btn-section');
  const main = document.querySelector('.main') as HTMLElement;
  main.append(selectBtnSection);
  const pageBtnsContainer = createElementOnPage('div', 'page-btns-container');
  selectBtnSection.append(pageBtnsContainer);
  const btnSelectGarage = createElementOnPage('button', 'btn-select-garage');
  btnSelectGarage.textContent = 'TO GARAGE';
  btnSelectGarage.setAttribute('type', 'submit');
  const btnSelectWinners = createElementOnPage('button', 'btn-select-winners');
  btnSelectWinners.textContent = 'TO WINNERS';
  btnSelectWinners.setAttribute('type', 'submit');
  pageBtnsContainer.append(btnSelectGarage, btnSelectWinners);
}
