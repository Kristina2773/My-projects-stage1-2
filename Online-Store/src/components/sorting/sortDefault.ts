import data from '../../database.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { sort } from './sort';

export function sortDefault() {
  const copyData = data;
  const sortList = document.querySelector<HTMLInputElement>('.search-and-sorting__sort-category');
  const sortMethod = JSON.parse(localStorage.getItem('method') as string) as string;
  if (!sortMethod && sortList) {
    setLocalStorage('method', sortList.value);
    sort(copyData);
  }
  if (sortList && sortMethod) {
    const method = JSON.parse(localStorage.getItem('method') as string) as string;
    sortList.value = method;
    sort(copyData);
    sortList.addEventListener('change', () => {
      sort(copyData);
    });
  }
}
