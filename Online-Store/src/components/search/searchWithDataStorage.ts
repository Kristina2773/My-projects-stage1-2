import { searchItem } from './search';
import data from '../../database.json';
import { IData } from '../types/interfaces';

export function searchWithDataStorage() {
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as Array<IData>;
  if (dataBuild && dataBuild.length !== 0) {
    searchItem(dataBuild);
  } else {
    searchItem(data);
  }
}
