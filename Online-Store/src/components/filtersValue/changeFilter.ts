import { selectCard } from './selectCard';
import { IData } from '../types/interfaces';
import { sort } from '../sorting/sort';

export function changeFilter() {
  selectCard();
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];
  if (dataBuild.length === 0) {
    const cards = document.querySelector<HTMLDivElement>('.cards');
    if (cards) {
      cards.innerHTML = `<h1 class = "message">Sorry, no matches found</h1>`;
    }
  } else {
    sort(dataBuild);
  }
}
