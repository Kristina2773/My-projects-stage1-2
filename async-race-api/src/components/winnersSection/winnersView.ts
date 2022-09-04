import './winners.css';
import { IPage } from '../interfaces/interfaces';
import { createElementOnPage } from '../commonFunction/createElementOnPage/createElementOnPage';
export class WinnersPage implements IPage {
  totalNumber: number;

  page: number;

  constructor(totalNumber: number, page: number) { this.totalNumber = totalNumber; this.page = page; }

  public render(): void {
    this.addWinnersContainer();
    this.renderWinnersTitle();
    this.renderPageTitle();
    this.renderWinnersTable();
    this.renderPaginationButtons();
  }

  private renderWinnersContainer(): HTMLElement {
    const winnersContainer = createElementOnPage(document, 'div', 'garage-container');
    winnersContainer.innerHTML = `
    <div class = "winners-title"> </div>
    <div class = "page-title"> </div>
    <div class = "winners-table"></div>
    <div class = "pagination-buttons"></div>
  `;
    return winnersContainer;
  }

  private addWinnersContainer(): void {
    const main = document.querySelector('.main') as HTMLElement;
    const winnersContainer = this.renderWinnersContainer();
    main.append(winnersContainer);
  }

  private renderWinnersTable(): void {
    const winnersTable = document.querySelector('.winners-table') as HTMLDivElement;
    winnersTable.innerHTML = `
    <div class = "table-row">
      <div class = "col col-1 w-number">Number</div>
      <div class = "col col-2 w-car">Car</div>
      <div class = "col col-3 w-name">Name</div>
      <div class = "col col-4 w-wins">Wins</div>
      <div class = "col col-5 w-Best">Best time (seconds)</div>
    </div>
    `;
  }

  private renderPaginationButtons(): void {
    const paginationButtonsContainer = document.querySelector('.pagination-buttons') as HTMLDivElement;
    paginationButtonsContainer.innerHTML = `
      <button class = "prev-page"><<< Prev</button>
      <button class = "next-page">Next >>> </button>
    `;
  }

  private renderWinnersTitle(): void {
    const winnersTitle = document.querySelector('.winners-title') as HTMLDivElement;
    winnersTitle.innerHTML = `
      <span class = "title">Winners</span>
      <span class = "total-number">${this.totalNumber}</span>
    `;
  }

  private renderPageTitle(): void {
    const pageTitle = document.querySelector('.page-title') as HTMLDivElement;
    pageTitle.innerHTML = `
      <span class = "subtitle">Page</span>
      <span class = "page">#${this.page}</span>
    `;
  }
}
