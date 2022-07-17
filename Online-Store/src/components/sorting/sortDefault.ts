import data from '../../database.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { createCard } from '../createcards/card';

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
