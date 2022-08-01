import { setLocalStorage } from '../localStorage/setLocalStorage';

export function updateBusketStorage(name: string) {
  const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
  if (basket.includes(name)) {
    const index = basket.indexOf(name);
    basket.splice(index, 1);
  } else {
    basket.push(name);
  }
  setLocalStorage('inBasket', basket);
}
