import { IFilter } from '../types/interfaces';
import { changeActive } from './changeActive';

export function activeBtns() {
  const filter = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
  const brandBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__brand');
  const sizeBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__btn_size');
  const colorBtns = document.querySelectorAll<HTMLInputElement>('.filter-value__btn_color');

  const brand = filter.filterByBrand as Array<string>;
  const size = filter.filterBySize as Array<string>;
  const color = filter.filterByColor as Array<string>;

  changeActive(brand, brandBtns, 'active-brand-btn');
  changeActive(size, sizeBtns, 'active-size-btn');
  changeActive(color, colorBtns, 'color-btn-active');
}
