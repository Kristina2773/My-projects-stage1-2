import { resetFilters } from './buttonResetFilters';
import { setLocalStorage } from '../localStorage/setLocalStorage';

export function clearLocalStorage() {
  const sortList = document.querySelector<HTMLSelectElement>('.search-and-sorting__sort-category');
  const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-and-sorting__input-field_submit') as HTMLButtonElement;
  const closeSearchIcon = document.querySelector('.search-and-sorting__close-icon') as HTMLDivElement;
  const popularBtn = document.querySelector<HTMLInputElement>('.filter-value__btn_popular');
  const count = document.querySelector<HTMLDivElement>('.header__basket-count');
  const sortFromAToZ = 'By name, from A to Z';

  if (sortList) {
    sortList.value = sortFromAToZ;
  }
  if (searchField) {
    searchField.value = '';
    closeSearchIcon.classList.add('none');
    searchBtn.classList.remove('none');
  }
  if (popularBtn) {
    popularBtn.checked = false;
  }
  if (count) {
    count.textContent = String(0);
  }
  setLocalStorage('method', sortFromAToZ);
  setLocalStorage('inBasket', []);
  resetFilters();
}
