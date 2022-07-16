import { selectCard } from './selectCard';
import { createCard } from '../createcards/card';
import { IData } from '../types/interfaces';

export function changeFilter() {
  selectCard();
  const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as IData[];
  createCard(dataBuild);
}
