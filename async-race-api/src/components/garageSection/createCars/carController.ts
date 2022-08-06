import { ICarItem } from "../../interfaces/interfaces";
import { Car } from "./carView";
import { CarType } from "../../interfaces/interfaces";
import { DataController } from "../../data/dataController";

export class CarController implements ICarItem {
  public data: CarType[];
  constructor(data: CarType[]) {
    this.data = data;
  }
  public render() {
    this.clearCarContainer();
    this.generateCar();
    this.renderNewCar();
  }
  private clearCarContainer() {
    const cars = document.querySelector<HTMLDivElement>('.cars-in-garage');
    if (cars) {
      cars.innerHTML = '';
    }
  }
  private async generateCar() {
    this.data.forEach(element => {
      const car = new Car(element.name, element.id, element.color);
      car.render();
    });
  }
  private renderNewCar() {
    const dataController = new DataController();
    const createButton = document.querySelector<HTMLButtonElement>('.create-item-btn');
    createButton?.addEventListener('click', async () => {
      await dataController.postData();
      const updateData = await dataController.getData() as CarType[];
      if (typeof updateData !== 'string') {
        const element = updateData[updateData.length - 1];
        const car = new Car(element.name, element.id, element.color);
        car.render();
      }
      const count = document.querySelector<HTMLDivElement>('.total-number');
      if (count) {
        count.textContent = String(Number(count.textContent) + 1);
      }
      const [createInput, createColor] = ['.input-create-item', '.input-create-color'].map((item) => document.querySelector<HTMLInputElement>(item));
      if (createColor && createInput) {
        const initialColor = '#000000';
        createInput.value = '';
        createColor.value = initialColor;
      }
    });
  }
}