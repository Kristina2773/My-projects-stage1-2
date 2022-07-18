import { setLocalStorage } from '../localStorage/setLocalStorage';

export function addInBasket(name: string) {
  const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
  if (basket && basket.includes(name)) {
    const index: number = basket.indexOf(name);
    basket.splice(index, 1);
    setLocalStorage('inBasket', basket);
  } else {
    basket.push(name);
    setLocalStorage('inBasket', basket);
  }
}
