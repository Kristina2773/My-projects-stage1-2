import './cars.css';
import { createElementOnPage } from '../../commonFunction/createElementOnPage/createElementOnPage';
import { CarType, ICarItem } from '../../interfaces/interfaces';
import { DataController } from '../../data/dataController';
import { DataModal } from '../../data/dataModal';
export class Car implements ICarItem {
  name: string;

  id: number;

  colorCar: string;

  constructor(name: string, id: number, colorCar: string) {
    this.name = name;
    this.id = id;
    this.colorCar = colorCar;
  }

  public async render() {
    this.addCarContainertoCarsInGarageContainer();
    this.addContainersToCar();
    this.removeCar(this.id);
    await this.selectCarForUpdate(this.id);
  }

  private renderCarContainer() {
    const car = createElementOnPage(document, 'div', 'car');
    car.dataset.id = String(this.id);
    return car;
  }

  private addCarContainertoCarsInGarageContainer() {
    const carsInGarage = document.querySelector('.cars-in-garage');
    const car = this.renderCarContainer();
    carsInGarage?.append(car);
  }

  private renderContainerForButtonsAndTitleCar() {
    const selectRemoveBtnsContainer = createElementOnPage(document, 'div', 'select-remove-btn-item');
    const btnSelectCar = this.renderBtnSelectCar();
    const btnRemoveCar = this.renderBtnRemoveCar();
    const carModelTitle = this.renderCarModelTitle();
    selectRemoveBtnsContainer.append(btnSelectCar, btnRemoveCar, carModelTitle);
    return selectRemoveBtnsContainer;
  }

  private renderBtnSelectCar() {
    const btnSelectCar = createElementOnPage(document, 'button', 'select-car');
    btnSelectCar.classList.add(`select-${this.id}`);
    btnSelectCar.textContent = 'SELECT';
    btnSelectCar.setAttribute('type', 'submit');
    btnSelectCar.dataset.id = `${this.id}`;
    return btnSelectCar;
  }

  private renderBtnRemoveCar() {
    const btnRemoveCar = createElementOnPage(document, 'button', 'remove-car');
    btnRemoveCar.classList.add(`remove-${this.id}`);
    btnRemoveCar.textContent = 'REMOVE';
    btnRemoveCar.setAttribute('type', 'submit');
    btnRemoveCar.dataset.id = `${this.id}`;
    return btnRemoveCar;
  }

  private renderCarModelTitle() {
    const carModelContainer = createElementOnPage(document, 'span', 'car-name-and-model');
    carModelContainer.classList.add(`car-name-${this.id}`);
    carModelContainer.textContent = `${this.name}`;
    return carModelContainer;
  }

  private addContainersToCar() {
    const car = document.querySelectorAll('.car');
    const selectRemoveBtnsContainer = this.renderContainerForButtonsAndTitleCar();
    const controlButtonsContainer = this.renderContainerControlButtons();
    const carImgAndFlagContainer = this.renderCarImgAndFlagContainer();
    car.forEach((elem) =>
      elem.append(selectRemoveBtnsContainer, controlButtonsContainer, carImgAndFlagContainer));
  }

  private renderContainerControlButtons() {
    const controlButtonsContainer = createElementOnPage(document, 'div', 'control-buttons');
    const startBtn = this.renderStartBtn();
    const stopBtn = this.renderStopBtn();
    controlButtonsContainer.append(startBtn, stopBtn);
    return controlButtonsContainer;
  }

  private renderStartBtn() {
    const startBtn = createElementOnPage(document, 'button', 'start-btn');
    startBtn.classList.add(`start-${this.id}`);
    startBtn.textContent = 'A';
    startBtn.setAttribute('type', 'submit');
    return startBtn;
  }

  private renderStopBtn() {
    const stopBtn = createElementOnPage(document, 'button', 'stop-btn');
    stopBtn.classList.add(`stop-${this.id}`);
    stopBtn.classList.add('active');
    stopBtn.textContent = 'B';
    stopBtn.setAttribute('type', 'submit');
    return stopBtn;
  }

  private renderCarImgAndFlagContainer() {
    const carImgAndFlagContainer = createElementOnPage(document, 'div', 'car-and-flag-img');
    carImgAndFlagContainer.innerHTML = `
      <svg class="car-svg car-svg-${this.id}" 
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        version="1.1" id="mdi-car-estate" width="24" height="24" viewBox="0 0 24 24" fill = ${this.colorCar}>
      <path d="M3,6H16L19,10H21C22.11,10 
      23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V8C1,6.89 
      1.89,6 3,6M2.5,7.5V10H10.5V7.5H2.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5
      0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0
      18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z" />
      </svg>
      <img src = "./assets/img/flag.svg" alt="flag"  class="flag">
    `;
    return carImgAndFlagContainer;
  }

  private removeCar(id: number) {
    const dataController = new DataController();
    const removeButtons = document.querySelectorAll<HTMLButtonElement>(`.remove-${id}`);
    removeButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const carsContainer = document.querySelector<HTMLDivElement>('.cars-in-garage');
        const cars = document.querySelectorAll<HTMLDivElement>('.car');
        const count = document.querySelector<HTMLDivElement>('.total-number');
        cars.forEach(async (car) => {
          if (Number(car.dataset.id) === Number(button.dataset.id)) {
            await dataController.deleteData(Number(button.dataset.id));
            carsContainer?.removeChild(car);
          }
        });
        if (count) {
          const data = await dataController.getData() as CarType[];
          count.textContent = String(data.length - 1);
        }
      });
    });
  }

  private async selectCarForUpdate(id: number) {
    const [updateInput, updateColorInput] = ['.input-update-item', '.update-color'].map((item) =>
      document.querySelector<HTMLInputElement>(item));

    const updateButton = document.querySelector<HTMLButtonElement>('.update-item-btn');
    const selectButton = document.querySelector<HTMLButtonElement>(`.select-${id}`);
    const carImg = document.querySelector<HTMLElement>(`.car-svg-${id}`);
    const carName = document.querySelector<HTMLSpanElement>(`.car-name-${id}`);
    const dataController = new DataController();
    const dataModal = new DataModal();
    const data = await dataModal.getOrDeleteData('GET', `http://127.0.0.1:3000/garage/${id}`) as CarType;
    selectButton?.addEventListener('click', () => {
      if (updateInput && updateColorInput) {
        updateInput.value = data.name;
        updateColorInput.value = data.color;
      }
      updateButton?.addEventListener('click', async () => {
        await dataController.putData(id);
        const updateData = await dataModal.getOrDeleteData('GET', `http://127.0.0.1:3000/garage/${id}`) as CarType;
        if (carImg && carName) {
          carImg.style.fill = updateData.color;
          carName.innerText = updateData.name;
        }
        if (updateInput && updateColorInput) {
          const initialColor = '#000000';
          updateInput.value = '';
          updateColorInput.value = initialColor;
        }
      });
    });
  }
}
