import data from '../../database.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IData, IFilter } from '../types/interfaces';

export function selectCard() {
  const getLocalStorageString = localStorage.getItem('filters') as string;

  const filters = JSON.parse(getLocalStorageString) as IFilter;
  let copyData = data as Array<IData>;
  let array: Array<IData> = [];

  const brandArr = filters.filterByBrand;
  const sizeArr = filters.filterBySize;
  const colorArr = filters.filterByColor;
  const popularArr = filters.isPopular;
  const stockArr = filters.filterByQuantity;
  const yearArr = filters.filterByYear;

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
  if (popularArr.length > 0) {
    copyData.forEach((item) => {
      if (popularArr.includes(item.isPopular)) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }
  if (stockArr.length > 0) {
    copyData.forEach((item) => {
      if (item.quantity >= parseInt(stockArr[0]) && item.quantity <= parseInt(stockArr[1])) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }
  if (yearArr.length > 0) {
    copyData.forEach((item) => {
      if (item.releaseYear >= parseInt(yearArr[0]) && item.releaseYear <= parseInt(yearArr[1])) {
        array.push(item);
      }
    });
    copyData = array;
    array = [];
  }
  if (copyData.length !== 0) {
    copyData;
  }

  const dataBase = [...new Set(copyData)];
  setLocalStorage('Data', dataBase);
}
