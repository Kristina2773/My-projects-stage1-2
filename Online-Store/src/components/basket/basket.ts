import { setLocalStorage } from '../localStorage/setLocalStorage';
import { addInBasket } from './addInBasket';
import { showBasket } from './showBasket';

export function addAndRemoveItemFromBasket() {
  const cards = document.querySelector('.cards') as HTMLElement;
  const count = document.querySelector('.header__basket-count') as HTMLDivElement;
  const itemInBasket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];

  if (!itemInBasket) {
    setLocalStorage('inBasket', []);
  }
  showBasket();
  // cards.forEach((card): void => {
  cards.addEventListener('click', (event): void => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('in-basket')) {
      const maxItemsInBasket = 20;
      if (Number(count.textContent) < maxItemsInBasket) {
        count.textContent = String(Number(count.textContent) + 1);
        target.classList.add('in-basket');
        const name = target.querySelector<HTMLDivElement>('.card__title');
        if (name) {
          addInBasket(name.textContent as string);
        }
      } else {
        alert('Sorry, all slots are busy');
      }
    } else {
      count.textContent = String(Number(count.textContent) - 1);
      target.classList.remove('in-basket');
      const name = target.querySelector<HTMLDivElement>('.card__title');
      if (name) {
        addInBasket(name.textContent as string);
      }
    }
  });
  // });
}
