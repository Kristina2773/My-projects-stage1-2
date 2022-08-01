import { IFilter } from '../types/interfaces';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { changeFilter } from './changeFilter';

export function addFilters(dataSet: string, filtersOptions: IFilter, filter: string[]): void {
  if (filter && filter.includes(dataSet)) {
    const index = filter.indexOf(dataSet);
    filter.splice(index, 1);
  } else {
    filter.push(dataSet);
  }
  setLocalStorage('filters', filtersOptions);
  changeFilter();
}
