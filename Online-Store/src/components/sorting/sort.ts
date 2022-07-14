import data from '../../database.json';
import { createCard } from '../createcards/card';

export function sort() {
  const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
  const copyData = data;
  copyData.forEach((item) => {
    if (Number(item.title.codePointAt(0)) < 65 || Number(item.title.codePointAt(0)) > 90) {
      item.title = item.title[0].toUpperCase() + item.title.slice(1, item.title.length);
    }
  });
  sortList.addEventListener('change', () => {
    const cards = document.querySelector('.cards') as HTMLDivElement;
    cards.innerHTML = '';
    switch (sortList.value) {
      case 'By name, from A to Z':
        copyData.sort((a, b) => Number(a.title.codePointAt(0)) - Number(b.title.codePointAt(0)));
        createCard(copyData);
        break;
      case 'By name, from Z to A':
        copyData.sort((a, b) => Number(b.title.codePointAt(0)) - Number(a.title.codePointAt(0)));
        createCard(copyData);
        break;
      case 'By year, ascending':
        copyData.sort((a, b) => a.releaseYear - b.releaseYear);
        createCard(copyData);
        break;
      case 'By year, descending':
        copyData.sort((a, b) => b.releaseYear - a.releaseYear);
        console.log(copyData);
        createCard(copyData);
        break;
    }
  });
}
