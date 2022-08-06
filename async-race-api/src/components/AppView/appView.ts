import { GaragePage } from '../garageSection/viewGarage';
import { CarType } from '../interfaces/interfaces';
import { DataController } from '../data/dataController';

export class AppView {
  public data: CarType[];
  private readonly garagePage: GaragePage;
  // private readonly winnersPage: WinnersPage;

  constructor(data: CarType[]) {
    this.data = data;
    this.garagePage = new GaragePage(this.data.length, 1);
    // this.winnersPage = new WinnersPage();
  }

  public renderPage() {
    this.renderGaragePage();
    // this.renderWinnerPage();
  }

  private renderGaragePage() {
    this.garagePage.render();
  }

  // private renderWinnerPage() {
  //   this.winnersPage.render();
  // }
}