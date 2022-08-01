import { searchItem } from './search';
import data from '../../database.json';
import { IData } from '../types/interfaces';

export function searchWithDataStorage() {
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as Array<IData>;
  const searchData = dataBuild?.length !== 0 ? dataBuild : data;
  searchItem(searchData);
}
