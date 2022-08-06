import { DataController } from "../data/dataController";
import { CarController } from "../garageSection/createCars/carController";
import { CarType } from "../interfaces/interfaces";
import { AppView } from "../AppView/appView";

export class AppController {
  public readonly dataController: DataController;
  constructor() {
    this.dataController = new DataController();
  }
  public render() {
    this.renderView();
    this.renderDataCar();
  }
  private async renderDataCar() {
    const data = await this.dataController.getData() as CarType[];
    const carController = new CarController(data);
    carController.render();
  }
  private async renderView() {
    const data = await this.dataController.getData() as CarType[];
    const appView = new AppView(data);
    appView.renderPage();
  }
}