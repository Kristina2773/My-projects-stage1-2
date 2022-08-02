import { baseSlider } from './baseSlider';
import data from '../../database.json';
import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilter } from '../types/interfaces';

export function rangeSliderYear() {
  let year: number[] = [];
  data.forEach((elem): void => {
    year.push(elem.releaseYear);
  });
  year = year.sort((a, b) => a - b);
  const yearEarlier = parseInt(JSON.parse(localStorage.getItem('yearEarlier') as string) as string);
  const yearLater = parseInt(JSON.parse(localStorage.getItem('yearLater') as string) as string);

  if (!yearEarlier && !yearLater) {
    setLocalStorage('yearEarlier', year[0]);
    setLocalStorage('yearLater', year[year.length - 1]);
  }
  const filters = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
  const valueYear = filters.filterByYear;
  baseSlider(
    '.release-slider-1',
    '.release-slider-2',
    '.year-earlier',
    '.year-later',
    '.slider-track-year',
    year[0],
    year[year.length - 1],
    yearEarlier,
    yearLater,
    'yearLater',
    'yearEarlier',
    valueYear,
    filters
  );
}
