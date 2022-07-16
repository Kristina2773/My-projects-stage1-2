import data from '../../database.json';
import { createCard } from '../createcards/card';
import { IData } from '../types/interfaces';
import { setLocalStorage } from '../localStorage/setLocalStorage';

function sort(data: Array<IData>) {
  const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
  const copyData = data;
  copyData.forEach((item) => {
    if (Number(item.title.codePointAt(0)) < 65 || Number(item.title.codePointAt(0)) > 90) {
      item.title = item.title[0].toUpperCase() + item.title.slice(1, item.title.length);
    }
  });
  sortList.addEventListener('change', () => {
    switch (sortList.value) {
      case 'By name, from A to Z':
        copyData.sort((a, b) => Number(a.title.codePointAt(0)) - Number(b.title.codePointAt(0)));
        createCard(copyData);
        setLocalStorage('Data', copyData);
        break;
      case 'By name, from Z to A':
        copyData.sort((a, b) => Number(b.title.codePointAt(0)) - Number(a.title.codePointAt(0)));
        createCard(copyData);
        setLocalStorage('Data', copyData);
        break;
      case 'By year, ascending':
        copyData.sort((a, b) => a.releaseYear - b.releaseYear);
        createCard(copyData);
        setLocalStorage('Data', copyData);
        break;
      case 'By year, descending':
        copyData.sort((a, b) => b.releaseYear - a.releaseYear);
        console.log(copyData);
        createCard(copyData);
        setLocalStorage('Data', copyData);
        break;
    }
  });
}

export function sortWithDataStorage() {
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as Array<IData>;
  console.log(dataBuild);
  if (dataBuild && dataBuild.length !== 0) {
    sort(dataBuild);
  } else {
    sort(data);
  }
}
export function sortDefault() {
  const copyData = data;
  copyData.forEach((item) => {
    if (Number(item.title.codePointAt(0)) < 65 || Number(item.title.codePointAt(0)) > 90) {
      item.title = item.title[0].toUpperCase() + item.title.slice(1, item.title.length);
    }
  });
  setLocalStorage('Data', copyData);
  const copyDefault = copyData;
  copyDefault.sort((a, b) => Number(a.title.codePointAt(0)) - Number(b.title.codePointAt(0)));
  createCard(copyDefault);
}
