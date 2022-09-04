import './selectSettingsContainer.css';
import './garage.css';
import './pageButtons.css';
import { createElementOnPage } from '../commonFunction/createElementOnPage/createElementOnPage';
import { IPage } from '../interfaces/interfaces';

export class GaragePage implements IPage {
  totalNumber: number;

  page: number;

  constructor(totalNumber: number, page: number) { this.totalNumber = totalNumber; this.page = page; }

  public render(): void {
    this.addSelectSettingsSectionToMain();
    this.addGarageContainer();
    this.renderGarageTitle();
    this.renderPageTitle();
    this.addChildrenToSelectSettingsSection();
    this.renderPaginationButtons();
  }

  private renderGarageContainer(): HTMLElement {
    const garageContainer = createElementOnPage(document, 'div', 'garage-container');
    garageContainer.innerHTML = `
    <div class = "garage-title"></div>
    <div class = "page-title"></div>
    <div class = "cars-in-garage"></div>
    <div class = "pagination-buttons"></div>
  `;
    return garageContainer;
  }

  private addSelectSettingsSectionToMain(): void {
    const main = document.querySelector('.main') as HTMLElement;
    const selectSettingsSection = createElementOnPage(document, 'section', 'select-settings-section');
    main.append(selectSettingsSection);
  }

  private addGarageContainer(): void {
    const main = document.querySelector('.main') as HTMLElement;
    const garageContainer = this.renderGarageContainer();
    main.append(garageContainer);
  }

  private renderCarsCreationInput(): HTMLElement {
    const inputForCreateNewItem = createElementOnPage(document, 'input', 'input-create-item');
    inputForCreateNewItem.setAttribute('autocomplete', 'off');
    return inputForCreateNewItem;
  }

  private renderCarsCreationColorInput(): HTMLElement {
    const inputAddColorToItem = createElementOnPage(document, 'input', 'input-create-color');
    inputAddColorToItem.setAttribute('type', 'color');
    return inputAddColorToItem;
  }

  private renderCarsCreationButton(): HTMLElement {
    const btnCreateItem = createElementOnPage(document, 'button', 'create-item-btn');
    btnCreateItem.setAttribute('type', 'submit');
    btnCreateItem.textContent = 'CREATE';
    return btnCreateItem;
  }

  private renderCreateContainer(): HTMLElement {
    const inputForCreateNewItem = this.renderCarsCreationInput();
    const inputAddColorToItem = this.renderCarsCreationColorInput();
    const btnCreateItem = this.renderCarsCreationButton();
    const createNewItemContainer = createElementOnPage(document, 'div', 'create-item-container');
    createNewItemContainer.append(inputForCreateNewItem, inputAddColorToItem, btnCreateItem);
    return createNewItemContainer;
  }

  private renderCarsUpdateCarInput(): HTMLElement {
    const inputForUpdateNewItem = createElementOnPage(document, 'input', 'input-update-item');
    inputForUpdateNewItem.setAttribute('autocomplete', 'off');
    return inputForUpdateNewItem;
  }

  private renderCarsUpdateColorInput(): HTMLElement {
    const inputUpdateColorOfItem = createElementOnPage(document, 'input', 'update-color');
    inputUpdateColorOfItem.setAttribute('type', 'color');
    return inputUpdateColorOfItem;
  }

  private renderCarsUpdateButton(): HTMLElement {
    const btnUpdateItem = createElementOnPage(document, 'button', 'update-item-btn');
    btnUpdateItem.setAttribute('type', 'submit');
    btnUpdateItem.textContent = 'UPDATE';
    return btnUpdateItem;
  }

  private renderCarsStartRace(): HTMLElement {
    const btnStartRace = createElementOnPage(document, 'button', 'start-race-btn');
    btnStartRace.setAttribute('type', 'submit');
    btnStartRace.textContent = 'RACE';
    return btnStartRace;
  }

  private renderCarsResetRace(): HTMLElement {
    const btnResetRace = createElementOnPage(document, 'button', 'reset-btn');
    btnResetRace.setAttribute('type', 'submit');
    btnResetRace.textContent = 'RESET';
    return btnResetRace;
  }

  private renderCarsGenerateButton(): HTMLElement {
    const btnGenerateItems = createElementOnPage(document, 'button', 'generate-btn');
    btnGenerateItems.setAttribute('type', 'submit');
    btnGenerateItems.textContent = 'GENERATE CARS';
    return btnGenerateItems;
  }

  private renderUpdateContainer(): HTMLElement {
    const inputForUpdateNewItem = this.renderCarsUpdateCarInput();
    const inputUpdateColorOfItem = this.renderCarsUpdateColorInput();
    const btnUpdateItem = this.renderCarsUpdateButton();
    const updateItemContainer = createElementOnPage(document, 'div', 'update-item-container');
    updateItemContainer.append(inputForUpdateNewItem, inputUpdateColorOfItem, btnUpdateItem);
    return updateItemContainer;
  }

  private renderSettingsBtnContainer(): HTMLElement {
    const btnStartRace = this.renderCarsStartRace();
    const btnResetRace = this.renderCarsResetRace();
    const btnGenerateItems = this.renderCarsGenerateButton();
    const selectSettingsBtnContainer = createElementOnPage(document, 'div', 'select-settings-btn-container');
    selectSettingsBtnContainer.append(btnStartRace, btnResetRace, btnGenerateItems);
    return selectSettingsBtnContainer;
  }

  private addChildrenToSelectSettingsSection(): void {
    const selectSettingsSection = document.querySelector('.select-settings-section') as HTMLElement;
    const createNewItemContainer = this.renderCreateContainer();
    const updateItemContainer = this.renderUpdateContainer();
    const selectSettingsBtnContainer = this.renderSettingsBtnContainer();
    selectSettingsSection.append(createNewItemContainer, updateItemContainer, selectSettingsBtnContainer);
  }

  private renderGarageTitle(): void {
    const garageTitle = document.querySelector('.garage-title') as HTMLDivElement;
    garageTitle.innerHTML = `
      <span class = "title">Garage</span>
      <span class = "total-number">${this.totalNumber}</span>
    `;
  }

  private renderPaginationButtons(): void {
    const paginationButtonsContainer = document.querySelector('.pagination-buttons') as HTMLDivElement;
    paginationButtonsContainer.innerHTML = `
      <button class = "prev-page"><<< Prev</button>
      <button class = "next-page">Next >>> </button>
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
