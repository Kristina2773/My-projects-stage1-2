import { setLocalStorage } from '../localStorage/setLocalStorage';
import { IFilter } from '../types/interfaces';
import { changeFilter } from '../filtersValue/changeFilter';

export function baseSlider(
  SlideOne: string,
  SlideTwo: string,
  ValueOne: string,
  ValueTwo: string,
  Track: string,
  minValue: number,
  maxValue: number,
  valueLess: number,
  valueMore: number,
  localStorageValueMax: string,
  localStorageValueMin: string,
  value: string[],
  filters: IFilter
) {
  const sliderOne = document.querySelector<HTMLInputElement>(SlideOne);
  const sliderTwo = document.querySelector<HTMLInputElement>(SlideTwo);
  const displayValOne = document.querySelector<HTMLSpanElement>(ValueOne);
  const displayValTwo = document.querySelector<HTMLSpanElement>(ValueTwo);
  const sliderTrack = document.querySelector<HTMLSpanElement>(Track);
  const minGap = 0;
  if (displayValOne && displayValTwo) {
    displayValOne.textContent = String(valueLess);
    displayValTwo.textContent = String(valueMore);
  }
  if (sliderOne) {
    sliderOne.min = String(0);
    sliderOne.max = String(maxValue - minValue);
    sliderOne.value = String(valueLess - minValue);
  }
  if (sliderTwo) {
    sliderTwo.min = String(0);
    sliderTwo.max = String(maxValue - minValue);
    sliderTwo.value = String(valueMore - minValue);
  }
  const sliderMaxValue: string = (sliderOne as HTMLInputElement).max;
  setValue(value, filters);
  changeFilter();
  if (sliderTrack && sliderOne && sliderTwo) {
    sliderTrack.style.background = `linear-gradient(to right, 
      #dadae5 ${(parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100}% , 
      #3264fe ${(parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100}% , 
      #3264fe ${(parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100}%, 
      #dadae5 ${(parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100}%)`;
  }
  if (sliderOne) {
    sliderOne.addEventListener('input', () => {
      slideOne();
      setValueToLocalStorage();
    });
    sliderOne.removeEventListener('input', () => {
      slideOne();
      setValueToLocalStorage();
    });
  }
  if (sliderTwo) {
    sliderTwo.addEventListener('input', () => {
      slideTwo();
      setValueToLocalStorage();
    });
    sliderTwo.removeEventListener('input', () => {
      slideTwo();
      setValueToLocalStorage();
    });
  }
  function slideOne() {
    if (sliderOne && sliderTwo && displayValOne) {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = String(parseInt(sliderTwo.value) - minGap);
      }
      displayValOne.textContent = String(parseInt(sliderOne.value) + minValue);
    }
    fillColor();
  }
  function slideTwo() {
    if (sliderOne && sliderTwo && displayValTwo) {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = String(parseInt(sliderOne.value) + minGap);
      }
      displayValTwo.textContent = String(parseInt(sliderTwo.value) + minValue);
    }
    fillColor();
  }
  function fillColor() {
    if (sliderOne && sliderTwo && sliderTrack) {
      const percent1 = (parseInt(sliderOne.value) / parseInt(sliderMaxValue)) * 100;
      const percent2 = (parseInt(sliderTwo.value) / parseInt(sliderMaxValue)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }
  }
  function setValue(value: string[], filters: IFilter) {
    if (displayValOne && displayValTwo) {
      value[0] = String(displayValOne.textContent);
      value[1] = String(displayValTwo.textContent);
      setLocalStorage('filters', filters);
    }
  }
  function setValueToLocalStorage() {
    if (displayValOne && displayValTwo) {
      setValue(value, filters);
      changeFilter();
      setLocalStorage(localStorageValueMin, displayValOne.textContent);
      setLocalStorage(localStorageValueMax, displayValTwo.textContent);
    }
  }
}
