import { sort } from './sort';
import data from '../../database.json';
import { IData } from '../types/interfaces';

export function sortWithDataStorage() {
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as Array<IData>;
  console.log(dataBuild);
  if (dataBuild && dataBuild.length !== 0) {
    sort(dataBuild);
  } else {
    sort(data);
  }
}
