import { setLocalStorage } from '../localStorage/setLocalStorage';
import { addInBasket } from './addInBasket';
import { showBasket } from './showBasket';

export function basket() {
  const cards = document.querySelectorAll<HTMLDivElement>('.card');
  const count = document.querySelector<HTMLDivElement>('.header__basket-count');
  const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];

  if (!basket) {
    setLocalStorage('inBasket', []);
  }
  showBasket();
  cards.forEach((card): void => {
    card.addEventListener('click', (): void => {
      if (!card.classList.contains('in-basket')) {
        if (count) {
          if (Number(count.textContent) < 20) {
            count.textContent = String(Number(count.textContent) + 1);
            card.classList.add('in-basket');
            const name = card.querySelector<HTMLDivElement>('.card__title');
            if (name) {
              addInBasket(name.textContent as string);
            }
          } else {
            alert('Sorry, all slots are busy');
          }
        }
      } else {
        if (count) {
          count.textContent = String(Number(count.textContent) - 1);
          card.classList.remove('in-basket');
          const name = card.querySelector<HTMLDivElement>('.card__title');
          if (name) {
            addInBasket(name.textContent as string);
          }
        }
      }
    });
  });
}
