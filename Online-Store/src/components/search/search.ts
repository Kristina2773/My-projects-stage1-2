import data from '../../database.json';
import { IData } from '../types/interfaces';
import { createCard } from '../createcards/card';

export function searchItem(): void {
  const cards = document.querySelector('.cards') as HTMLDivElement;
  let arrayCardForSearch: Array<IData> = [];
  const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-and-sorting__input-field_submit') as HTMLButtonElement;
  const closeSearchIcon = document.querySelector('.search-and-sorting__close-icon') as HTMLDivElement;
  if (searchField) {
    searchField.addEventListener('change', () => {
      const fieldValue = searchField.value;
      data.forEach((item) => {
        if (
          item.title.includes(fieldValue) ||
          String(item.quantity).includes(fieldValue) ||
          String(item.releaseYear).includes(fieldValue) ||
          item.Manufacturer.includes(fieldValue) ||
          item.size.includes(fieldValue) ||
          item.color.includes(fieldValue)
        ) {
          arrayCardForSearch.push(item);
        }
      });
      if (arrayCardForSearch.length === 0) {
        arrayCardForSearch = [];
        console.log('no matches');
        const messageElem = document.createElement('div');
        messageElem.classList.add('message');
        messageElem.textContent = 'Sorry, no matches found';
        cards.innerHTML = '';
        cards.append(messageElem);
      }
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      closeSearchIcon.classList.remove('none');
      searchBtn.classList.add('none');
      cards.innerHTML = '';
      console.log(cards);
      createCard(arrayCardForSearch);
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

// const copyData = data;
//   console.log(data);
//   copyData.forEach((item) => {
//     item.title.toLowerCase();
//     item.Manufacturer.toLowerCase();
//     item.color.toLowerCase();
//   });
//   // copyData = [];
//   console.log('data=', data, copyData);

// function dataToLowerCase() {
//   const copy = data;
//   // data.forEach((elem) => {
//   //   copyData.push(elem);
//   // });
//   // console.log(data);
//   copy.forEach((item) => {
//     item.title = item.title.toLowerCase();
//     item.Manufacturer = item.Manufacturer.toLowerCase();
//     item.color = item.color.toLowerCase();
//   });
//   copyData = copy;
// }
