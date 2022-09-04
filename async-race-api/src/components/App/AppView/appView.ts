import { GaragePage } from '../../garageSection/garageView';
import { CarType } from '../../interfaces/interfaces';
import { createElementOnPage } from '../../commonFunction/createElementOnPage/createElementOnPage';
import { WinnersPage } from '../../winnersSection/winnersView';

export class AppView {
  public data: CarType[];

  private activePage: number;

  private readonly garagePage: GaragePage;

  private readonly winnersPage: WinnersPage;

  constructor(data: CarType[], activePage: number) {
    this.data = data;
    this.activePage = activePage;
    this.garagePage = new GaragePage(this.data.length, this.activePage);
    this.winnersPage = new WinnersPage(this.data.length, 1);
  }

  public renderPageButtons(): void {
    this.addSelectBtnSectionToBody();
    this.addPageBtnsContainerToBtnSection();
    this.addPageButtonsToContainer();
  }

  private addSelectBtnSectionToBody(): void {
    const selectBtnSection = createElementOnPage(document, 'section', 'select-btn-section');
    const body = document.querySelector('.body') as HTMLElement;
    body.append(selectBtnSection);
  }

  private addPageBtnsContainerToBtnSection(): void {
    const selectBtnSection = document.querySelector('.select-btn-section') as HTMLElement;
    const pageBtnsContainer = createElementOnPage(document, 'div', 'page-btns-container');
    selectBtnSection.append(pageBtnsContainer);
  }

  private renderBtnSelectPageGarage(): HTMLElement {
    const btnSelectGarage = createElementOnPage(document, 'button', 'btn-select-garage');
    btnSelectGarage.textContent = 'TO GARAGE';
    btnSelectGarage.setAttribute('type', 'submit');
    btnSelectGarage.classList.add('active-page');
    return btnSelectGarage;
  }

  private renderBtnSelectWinners(): HTMLElement {
    const btnSelectWinners = createElementOnPage(document, 'button', 'btn-select-winners');
    btnSelectWinners.textContent = 'TO WINNERS';
    btnSelectWinners.setAttribute('type', 'submit');
    return btnSelectWinners;
  }

  private addPageButtonsToContainer(): void {
    const btnSelectGarage = this.renderBtnSelectPageGarage();
    const btnSelectWinners = this.renderBtnSelectWinners();
    const pageBtnsContainer = document.querySelector('.page-btns-container');
    pageBtnsContainer?.append(btnSelectGarage, btnSelectWinners);
  }

  public renderGaragePage(): void {
    this.garagePage.render();
  }

  public renderWinnerPage(): void {
    this.winnersPage.render();
  }
}
