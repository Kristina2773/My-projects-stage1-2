import { IData } from '../types/interfaces';
import { createCard } from '../createcards/card';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function searchItem(data: Array<IData>): void {
  const cards = document.querySelector('.cards') as HTMLDivElement;
  let arrayCardForSearch: Array<IData> = [];
  const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-and-sorting__input-field_submit') as HTMLButtonElement;
  const closeSearchIcon = document.querySelector('.search-and-sorting__close-icon') as HTMLDivElement;
  if (searchField) {
    searchField.addEventListener('change', () => {
      const fieldValue = searchField.value.toLowerCase();
      data.forEach((item) => {
        const title = item.title.toLowerCase();
        const brand = item.brand.toLowerCase();
        const color = item.color.toLowerCase();
        if (
          title.includes(fieldValue) ||
          String(item.quantity).includes(fieldValue) ||
          String(item.releaseYear).includes(fieldValue) ||
          String(brand).includes(fieldValue) ||
          item.size.includes(fieldValue) ||
          color.includes(fieldValue)
        ) {
          arrayCardForSearch.push(item);
        }
      });
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      closeSearchIcon.classList.remove('none');
      searchBtn.classList.add('none');
      cards.innerHTML = '';
      createCard(arrayCardForSearch);
      setLocalStorage('Data', arrayCardForSearch);
      if (arrayCardForSearch.length === 0) {
        const messageElem = document.createElement('div');
        messageElem.classList.add('message');
        messageElem.textContent = 'Sorry, no matches found';
        cards.innerHTML = '';
        cards.append(messageElem);
      }
      arrayCardForSearch = [];
    });
  }
  if (closeSearchIcon) {
    closeSearchIcon.addEventListener('click', () => {
      closeSearchIcon.classList.add('none');
      searchBtn.classList.remove('none');
      arrayCardForSearch = [];
      searchField.value = '';
      cards.innerHTML = '';
      createCard(data);
    });
  }
}
