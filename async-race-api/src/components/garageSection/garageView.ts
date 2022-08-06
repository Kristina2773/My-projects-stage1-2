import './selectSettingsContainer.css';
import './garage.css';
import './pageButtons.css';
import { createElementOnPage } from "../createElementOnPage";
import { IPage } from '../interfaces/interfaces';
import { AppController } from '../AppController/appController';

export class GaragePage implements IPage {
  totalNumber: number;
  page: number;
  constructor(totalNumber: number, page: number) {
    this.totalNumber = totalNumber,
    this.page = page;
  }
  public render() {
    this.addSelectBtnSectionToMain();
    this.addPageBtnsContainerToBtnSection();
    this.addPageButtonsToContainer();
    this.addSelectSettingsSectionToMain();
    this.addGarageContainer();
    this.addChildrenToSelectSettingsSection();
  }
  
  private renderGarageContainer() {
    const garageContainer = createElementOnPage(document, 'div', 'garage-container');
    garageContainer.innerHTML = `
    <div class = "garage-title">
      <span class = "title">Garage</span>
      <span class = "total-number">${this.totalNumber}</span>
    </div>
    <div class = "page-title">
      <span class = "subtitle">Page</span>
      <span class = "page">#${this.page}</span>
    </div>
    <div class = "cars-in-garage"></div>
  `
  return garageContainer;
  }
  private addSelectBtnSectionToMain() {
    const selectBtnSection = createElementOnPage(document, 'section', 'select-btn-section');
    const main = document.querySelector('.main') as HTMLElement;
    main.append(selectBtnSection);
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
  private addSelectSettingsSectionToMain() {
    const main = document.querySelector('.main') as HTMLElement;
    const selectSettingsSection = createElementOnPage(document, 'section', 'select-settings-section');
    main.append(selectSettingsSection);
  }
  private addGarageContainer() {
    const main = document.querySelector('.main') as HTMLElement;
    const garageContainer = this.renderGarageContainer();
    main.append(garageContainer);
  }
  private renderCarsCreationInput() {
    const inputForCreateNewItem = createElementOnPage(document, 'input', 'input-create-item');
    inputForCreateNewItem.setAttribute('autocomplete', 'off');
    return inputForCreateNewItem;
  }
  private renderCarsCreationColorInput() {
    const inputAddColorToItem = createElementOnPage(document, 'input', 'input-create-color');
    inputAddColorToItem.setAttribute('type', 'color');
    return inputAddColorToItem;

  }
  private renderCarsCreationButton() {
    const btnCreateItem = createElementOnPage(document, 'button', 'create-item-btn');
    btnCreateItem.setAttribute('type', 'submit');
    btnCreateItem.textContent = 'CREATE';
    return btnCreateItem;
  }
  private renderCreateContainer() {
    const inputForCreateNewItem = this.renderCarsCreationInput();
    const inputAddColorToItem = this.renderCarsCreationColorInput();
    const btnCreateItem = this.renderCarsCreationButton();
    const createNewItemContainer = createElementOnPage(document, 'div', 'create-item-container');
    createNewItemContainer.append(inputForCreateNewItem, inputAddColorToItem, btnCreateItem);
    return createNewItemContainer;
  }
  private renderCarsUpdateCarInput() {
    const inputForUpdateNewItem = createElementOnPage(document,'input', 'input-update-item');
    inputForUpdateNewItem.setAttribute('autocomplete', 'off');
    return inputForUpdateNewItem;
  }
  private renderCarsUpdateColorInput() {
    const inputUpdateColorOfItem = createElementOnPage(document,'input', 'update-color');
    inputUpdateColorOfItem.setAttribute('type', 'color');
    return inputUpdateColorOfItem;
  }

  private renderCarsUpdateButton() {
    const btnUpdateItem = createElementOnPage(document,'button', 'update-item-btn');
    btnUpdateItem.setAttribute('type', 'submit');
    btnUpdateItem.textContent = 'UPDATE';
    return btnUpdateItem;
  }

  private renderCarsStartRace() {
    const btnStartRace = createElementOnPage(document,'button', 'start-race-btn');
    btnStartRace.setAttribute('type', 'submit');
    btnStartRace.textContent = 'RACE';
    return btnStartRace;
  }
  private renderCarsResetRace() {
    const btnResetRace = createElementOnPage(document, 'button', 'reset-btn');
    btnResetRace.setAttribute('type', 'submit');
    btnResetRace.textContent = 'RESET';
    return btnResetRace;
  }
  private renderCarsGenerateButton() {
    const btnGenerateItems = createElementOnPage(document, 'button', 'generate-btn');
    btnGenerateItems.setAttribute('type', 'submit');
    btnGenerateItems.textContent = 'GENERATE CARS';
    return btnGenerateItems;
  }
  private renderUpdateContainer() {
    const inputForUpdateNewItem = this.renderCarsUpdateCarInput();
    const inputUpdateColorOfItem = this.renderCarsUpdateColorInput();
    const btnUpdateItem = this.renderCarsUpdateButton();
    const updateItemContainer = createElementOnPage(document, 'div', 'update-item-container');
    updateItemContainer.append(inputForUpdateNewItem, inputUpdateColorOfItem, btnUpdateItem);
    return updateItemContainer;
  }
  private renderSettingsBtnContainer() {
    const btnStartRace = this.renderCarsStartRace();
    const btnResetRace = this.renderCarsResetRace();
    const btnGenerateItems = this.renderCarsGenerateButton();
    const selectSettingsBtnContainer = createElementOnPage(document, 'div', 'select-settings-btn-container');
    selectSettingsBtnContainer.append(btnStartRace, btnResetRace, btnGenerateItems);
    return selectSettingsBtnContainer;
  }
  private addChildrenToSelectSettingsSection() {
    const selectSettingsSection = document.querySelector('.select-settings-section') as HTMLElement;
    const createNewItemContainer = this.renderCreateContainer();
    const updateItemContainer = this.renderUpdateContainer();
    const selectSettingsBtnContainer = this.renderSettingsBtnContainer();
    selectSettingsSection.append(createNewItemContainer, updateItemContainer, selectSettingsBtnContainer);
  }
  private renderPageNumbers() {
    const pageNumbersContainer = createElementOnPage(document, 'div', 'page-number-container');
    
  }
}