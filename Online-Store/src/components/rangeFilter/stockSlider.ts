import { setLocalStorage } from '../localStorage/setLocalStorage';
import { baseSlider } from './baseSlider';
import { IFilter } from '../types/interfaces';
import data from '../../database.json';

export function rangeSliderStock() {
  let stock: number[] = [];
  data.forEach((elem): void => {
    stock.push(elem.quantity);
  });
  stock = stock.sort((a, b) => a - b);
  const stockLess = parseInt(JSON.parse(localStorage.getItem('stockLess') as string) as string);
  const stockMore = parseInt(JSON.parse(localStorage.getItem('stockMore') as string) as string);
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
  const stockValue = filters.filterByQuantity;

  if (!stockLess && !stockMore) {
    setLocalStorage('stockLess', stock[0]);
    setLocalStorage('stockMore', stock[stock.length - 1]);
  }
  baseSlider(
    '.stock-slider-1',
    '.stock-slider-2',
    '.less',
    '.more',
    '.slider-track-stock',
    stock[0],
    stock[stock.length - 1],
    stockLess,
    stockMore,
    'stockMore',
    'stockLess',
    stockValue,
    filters
  );
}
