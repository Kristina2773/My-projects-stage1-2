import { createCard } from '../createcards/card';
import { IData } from '../types/interfaces';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function sort(data: Array<IData>) {
  const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
  const copyData = data;
  const codeOfA = 65;
  const codeOfZ = 90;

  copyData.forEach((item) => {
    if (Number(item.title.codePointAt(0)) < codeOfA || Number(item.title.codePointAt(0)) > codeOfZ) {
      item.title = item.title[0].toUpperCase() + item.title.slice(1, item.title.length);
    }
  });
  const method = sortList.value;
  switch (method) {
    case 'By name, from A to Z':
      copyData.sort((a, b) => Number(a.title.codePointAt(0)) - Number(b.title.codePointAt(0)));
      break;
    case 'By name, from Z to A':
      copyData.sort((a, b) => Number(b.title.codePointAt(0)) - Number(a.title.codePointAt(0)));
      break;
    case 'By year, ascending':
      copyData.sort((a, b) => a.releaseYear - b.releaseYear);
      break;
    case 'By year, descending':
      copyData.sort((a, b) => b.releaseYear - a.releaseYear);
      break;
  }
  createCard(copyData);
  setLocalStorage('Data', copyData);
  setLocalStorage('method', sortList.value);
}
