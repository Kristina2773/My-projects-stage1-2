import { GaragePage } from '../../garageSection/garageView';
import { CarType } from '../../interfaces/interfaces';
import { createElementOnPage } from '../../commonFunction/createElementOnPage/createElementOnPage';
import { WinnersPage } from '../../winnersSection/winnersView';

export class AppView {
  public data: CarType[];

  private readonly garagePage: GaragePage;

  private readonly winnersPage: WinnersPage;

  constructor(data: CarType[]) {
    this.data = data;
    this.garagePage = new GaragePage(this.data.length, 1);
    this.winnersPage = new WinnersPage(this.data.length, 1);
  }

  public renderPageButtons() {
    this.addSelectBtnSectionToBody();
    this.addPageBtnsContainerToBtnSection();
    this.addPageButtonsToContainer();
  }

  private addSelectBtnSectionToBody() {
    const selectBtnSection = createElementOnPage(document, 'section', 'select-btn-section');
    const body = document.querySelector('.body') as HTMLElement;
    body.append(selectBtnSection);
  }

  private addPageBtnsContainerToBtnSection() {
    const selectBtnSection = document.querySelector('.select-btn-section') as HTMLElement;
    const pageBtnsContainer = createElementOnPage(document, 'div', 'page-btns-container');
    selectBtnSection.append(pageBtnsContainer);
  }

  private renderBtnSelectPageGarage() {
    const btnSelectGarage = createElementOnPage(document, 'button', 'btn-select-garage');
    btnSelectGarage.textContent = 'TO GARAGE';
    btnSelectGarage.setAttribute('type', 'submit');
    btnSelectGarage.classList.add('active-page');
    return btnSelectGarage;
  }

  private renderBtnSelectWinners() {
    const btnSelectWinners = createElementOnPage(document, 'button', 'btn-select-winners');
    btnSelectWinners.textContent = 'TO WINNERS';
    btnSelectWinners.setAttribute('type', 'submit');
    return btnSelectWinners;
  }

  private addPageButtonsToContainer() {
    const btnSelectGarage = this.renderBtnSelectPageGarage();
    const btnSelectWinners = this.renderBtnSelectWinners();
    const pageBtnsContainer = document.querySelector('.page-btns-container');
    pageBtnsContainer?.append(btnSelectGarage, btnSelectWinners);
  }

  public renderGaragePage() {
    this.garagePage.render();
  }

  public renderWinnerPage() {
    this.winnersPage.render();
  }
}
