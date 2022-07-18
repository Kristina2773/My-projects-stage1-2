import { setLocalStorage } from '../localStorage/setLocalStorage';
import { filter } from './filter';
import { IFilter, IData } from '../types/interfaces';
import { addFilters } from './addFilters';
import { changeFilter } from './changeFilter';
import {
  goddesBrandBtn,
  fairyBrandBtn,
  calzedoniaBrandBtn,
  roxyBrandBtn,
  ruxaraBrandBtn,
  size42Btn,
  size44Btn,
  size46Btn,
  size48Btn,
  size50Btn,
  colorBlackBtn,
  colorGoldBtn,
  colorPinkBtn,
  colorRedBtn,
  colorWhiteBtn,
} from '../consts/btns';

export function applyFilters() {
  const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as IData;
  const popularBtn = document.querySelector<HTMLInputElement>('.filter-value__btn_popular');
  if (!filtersOptions) {
    const filt = filter as IFilter;
    setLocalStorage('filters', filt);
    changeFilter();
  } else {
    const isPopular = filtersOptions.isPopular;
    if (isPopular) {
      if (popularBtn) {
        if (isPopular.length > 0) {
          popularBtn.checked = true;
          changeFilter();
        }
      }
    }
  }
  if (!dataBuild) {
    const dat: IData[] = [];
    setLocalStorage('Data', dat);
  }

  if (goddesBrandBtn && fairyBrandBtn && calzedoniaBrandBtn && roxyBrandBtn && ruxaraBrandBtn) {
    [goddesBrandBtn, fairyBrandBtn, calzedoniaBrandBtn, roxyBrandBtn, ruxaraBrandBtn].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataSetBrand = elem.dataset.brand as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
        const filterBrand = filtersOptions.filterByBrand as string[];
        addFilters(dataSetBrand, filtersOptions, filterBrand);
      });
    });
  }
  if (size42Btn && size44Btn && size46Btn && size48Btn && size50Btn) {
    [size42Btn, size44Btn, size46Btn, size48Btn, size50Btn].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataSetSize = elem.dataset.size as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
        const filterSize = filtersOptions.filterBySize as string[];
        addFilters(dataSetSize, filtersOptions, filterSize);
      });
    });
  }
  if (colorBlackBtn && colorGoldBtn && colorPinkBtn && colorRedBtn && colorWhiteBtn) {
    [colorBlackBtn, colorGoldBtn, colorPinkBtn, colorRedBtn, colorWhiteBtn].forEach((elem): void => {
      elem.addEventListener('click', (): void => {
        const dataSetColor = elem.dataset.color as string;
        const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
        const filterColor = filtersOptions.filterByColor as string[];
        addFilters(dataSetColor, filtersOptions, filterColor);
      });
    });
  }
  if (popularBtn) {
    popularBtn.addEventListener('change', (): void => {
      const data: boolean = popularBtn.checked ? true : false;
      const filtersOptions = JSON.parse(localStorage.getItem('filters') as string) as IFilter;
      if (filtersOptions.isPopular) {
        if (!data) {
          filtersOptions.isPopular = [];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        } else {
          filtersOptions.isPopular = ['yes'];
          setLocalStorage('filters', filtersOptions);
          changeFilter();
        }
      }
    });
  }
}
