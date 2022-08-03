import { GaragePage } from '../garageSection/viewGarage';

export class AppView {
  private readonly garagePage: GaragePage;
  // private readonly winnersPage: WinnersPage;

  constructor() {
    this.garagePage = new GaragePage(0, 1);
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