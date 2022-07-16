import data from '../../database.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IData, IFilter } from '../types/interfaces';

export function selectCard() {
  const getLocalStorageString = localStorage.getItem('filters') as string;

  const filters = JSON.parse(getLocalStorageString) as IFilter;
  let copyData = data as Array<IData>;
  let array: Array<IData> = [];

  const brandArr = filters.filterByBrand as Array<string>;
  const sizeArr = filters.filterBySize as Array<string>;
  const colorArr = filters.filterByColor as Array<string>;

  if (brandArr.length > 0) {
    copyData.forEach((item) => {
      if (brandArr.includes(item.brand)) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }
  if (sizeArr.length > 0) {
    copyData.forEach((item) => {
      if (sizeArr.includes(item.size)) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }
  if (colorArr.length > 0) {
    copyData.forEach((item) => {
      if (colorArr.includes(item.color)) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }

  copyData = copyData.length == 0 ? data : copyData;
  const dataBase = [...new Set(copyData)];
  setLocalStorage('Data', dataBase);
}
