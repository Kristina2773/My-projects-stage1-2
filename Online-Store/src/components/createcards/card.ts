import { IData } from '../types/interfaces';
import { addAndRemoveItemFromBasket } from '../basket/basket';

export function createCard(data: Array<IData>): void {
  const cards = document.querySelector('.cards') as HTMLDivElement;
  if (cards) {
    cards.innerHTML = '';
  }
  data.forEach((item: IData) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.innerHTML = `
    <h3 class="card__title">${item.title}</h3>
    <img class="card-img" src="${item.img}" alt="black dress">
    <div class="card__description">
      <p>Quantity in stock: ${item.quantity}</p>
      <p>Year of release: ${item.releaseYear}</p>
      <p>Manufacturer: ${item.brand}</p>
      <p>Size: ${item.size}</p>
      <p>Color: ${item.color}</p>
      <p>Popular: ${item.isPopular}</p>
    </div>
    `;
    cards.append(cardContainer);
  });
  addAndRemoveItemFromBasket();
}
