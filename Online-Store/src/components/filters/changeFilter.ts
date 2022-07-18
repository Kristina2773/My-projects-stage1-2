import { selectCard } from './selectCard';
import { IData } from '../types/interfaces';
import { sort } from '../sorting/sort';
import data from '../../database.json';
import { createCard } from '../createcards/card';
import { sortDefault } from '../sorting/sortDefault';

export function changeFilter() {
  console.log('3');
  const copyData = data;
  selectCard();
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];
  console.log('drBuild', dataBuild);
  if (dataBuild.length === 0) {
    const cards = document.querySelector<HTMLDivElement>('.cards');
    if (cards) {
      cards.innerHTML = `<h1 class = "message">Sorry, no matches found</h1>`;
    }
  } else {
    // createCard(dataBuild);
    sort(dataBuild);
  }
}
