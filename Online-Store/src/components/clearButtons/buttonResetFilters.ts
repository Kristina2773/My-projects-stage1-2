import { IFilter, IData } from '../types/interfaces';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { sortDefault } from '../sorting/sortDefault';
import { slider } from '../rangeFilter/sliders';
import { filter } from '../filters/filter';
import data from '../../database.json';

export function resetFilters() {
  const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as IData;
  let year: number[] = [];
  let stock: number[] = [];
  data.forEach((elem): void => {
    year.push(elem.releaseYear);
    stock.push(elem.quantity);
  });
  year = year.sort((a, b) => a - b);
  stock = stock.sort((a, b) => a - b);
  setLocalStorage('yearEarlier', year[0]);
  setLocalStorage('yearLater', year[year.length - 1]);
  setLocalStorage('stockLess', stock[0]);
  setLocalStorage('stockMore', stock[stock.length - 1]);
  slider();
  if (filtersOptions) {
    const filt = filter;
    setLocalStorage('filters', filt);
  }
  if (dataBuild) {
    const dat: IData[] = [];
    setLocalStorage('Data', dat);
  }
  sortDefault();
}
