import { IFilter } from '../types/interfaces';
import { changeActive } from './changeActive';

export function makeButtonsActive() {
  const localStorageFilter = localStorage.getItem('filters') as string | '';
  const filter = JSON.parse(localStorageFilter) as IFilter;
  const brandBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__brand');
  const sizeBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__btn_size');
  const colorBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__btn_color');

  const brand = filter.filterByBrand;
  const size = filter.filterBySize;
  const color = filter.filterByColor;

  changeActive(brand, brandBtns, 'active-brand-btn');
  changeActive(size, sizeBtns, 'active-size-btn');
  changeActive(color, colorBtns, 'color-btn-active');
}
