export function showBasket() {
  const basket = JSON.parse(localStorage.getItem('inBasket') as string) as string[];
  const count = document.querySelector<HTMLDivElement>('.header__basket-count');
  if (basket.length > 0) {
    const cards = document.querySelectorAll<HTMLDivElement>('.card');
    cards.forEach((card): void => {
      for (let k = 0; k < basket.length; k++) {
        const name = card.querySelector<HTMLDivElement>('.card__title');
        if (name) {
          if (basket.includes(String(name.textContent))) {
            card.classList.add('in-basket');
          }
        }
      }
    });
    if (count) {
      count.textContent = String(basket.length);
    }
  }
}
