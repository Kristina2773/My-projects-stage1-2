import './cars.css';
import { createElementOnPage } from '../../createElementOnPage';
import { ICarItem } from '../../interfaces/interfaces';

export class Car implements ICarItem {
  name: string;
  model: string;
  colorCar: string;
  constructor( name: string, model: string, colorCar: string ) {
    this.name = name,
    this.model = model,
    this.colorCar = colorCar;
  }
  public render() {
    this.addCarContainertoCarsInGarageContainer();
    this.addContainersToCar();
  }
  private renderCarContainer() {
    const car = createElementOnPage(document, 'div', 'car');
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
    btnSelectCar.textContent = 'CREATE';
    btnSelectCar.setAttribute('type', 'submit');
    return btnSelectCar;
  }
  private renderBtnRemoveCar() {
    const btnRemoveCar = createElementOnPage(document, 'button', 'remove-car');
    btnRemoveCar.textContent = 'REMOVE';
    btnRemoveCar.setAttribute('type', 'submit');
    return btnRemoveCar;
  }
  private renderCarModelTitle() {
    const carModelContainer = createElementOnPage(document, 'span', 'car-name-and-model');
    carModelContainer.textContent = `${this.name} ${this.model}`;
    return carModelContainer;
  }
  private addContainersToCar() {
    const car = document.querySelector('.car') as HTMLDivElement;
    const selectRemoveBtnsContainer = this.renderContainerForButtonsAndTitleCar();
    const controlButtonsContainer = this.renderContainerControlButtons();
    const carImgAndFlagContainer = this.renderCarImgAndFlagContainer();
    car?.append(selectRemoveBtnsContainer, controlButtonsContainer, carImgAndFlagContainer);
  }
  private renderContainerControlButtons() {
    const controlButtonsContainer = createElementOnPage(document, 'div', '.control-buttons');
    const startBtn = this.renderStartBtn();
    const stopBtn = this.renderStopBtn();
    controlButtonsContainer.append(startBtn, stopBtn);
    return controlButtonsContainer;
  }
  private renderStartBtn() {
    const startBtn = createElementOnPage(document, 'button', 'start-btn');
    startBtn.textContent = 'A';
    startBtn.setAttribute('type', 'submit');
    return startBtn;
  }
  private renderStopBtn() {
    const stopBtn = createElementOnPage(document, 'button', 'stop-btn active');
    stopBtn.textContent = 'B';
    stopBtn.setAttribute('type', 'submit');
    return stopBtn;
  }
  private renderCarImgAndFlagContainer() {
    const carImgAndFlagContainer = createElementOnPage(document, 'div', 'car-and-flag-img');
    carImgAndFlagContainer.innerHTML = `
      <svg class="car-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-car-estate" width="24" height="24" viewBox="0 0 24 24" fill = ${this.colorCar}>
      <path d="M3,6H16L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V8C1,6.89 1.89,6 3,6M2.5,7.5V10H10.5V7.5H2.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z" />
      </svg>
      <img src = "./assets/img/flag.svg" alt="flag"  class="flag">
    `;
    return carImgAndFlagContainer;
  }
  
}