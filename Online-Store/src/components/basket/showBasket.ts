export function showBasket() {
  const itemInBasket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
  const count = document.querySelector<HTMLDivElement>('.header__basket-count');
  if (itemInBasket.length > 0) {
    const cards = document.querySelectorAll<HTMLDivElement>('.card');
    cards.forEach((card): void => {
      for (let k = 0; k < itemInBasket.length; k++) {
        const name = card.querySelector<HTMLDivElement>('.card__title');
        if (name) {
          if (itemInBasket.includes(String(name.textContent))) {
            card.classList.add('in-basket');
          }
        }
      }
    });
    if (count) {
      count.textContent = String(itemInBasket.length);
    }
  }
}
