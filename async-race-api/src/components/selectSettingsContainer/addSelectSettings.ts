import './selectSettingsContainer.css';
import { createElementOnPage } from "../createElementOnPage";

export function addSelectSettings() {

}

interface Page {
  render: () => void;
}

class GaragePage implements Page {
  constructor() {
    
  }
  public render() {
    this.addSelectSettingsSectionToMain();
    this.renderGarageTitle();
    this.addChildrenToSelectSettingsSection();
  }
  
  private renderGarageTitle() {
    
  }
  private addSelectSettingsSectionToMain() {
    const main = document.querySelector('.main') as HTMLElement;
    const selectSettingsSection = createElementOnPage(document, 'section', 'select-settings-section');
    main.append(selectSettingsSection);
  }
  private renderCarsCreationInput() {
    const inputForCreateNewItem = createElementOnPage(document, 'input', 'input-create-item');
    inputForCreateNewItem.setAttribute('autocomplete', 'off');
    return inputForCreateNewItem;
  }
  private renderCarsCreationColorInput() {
    const inputAddColorToItem = createElementOnPage(document, 'input', 'create-color');
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
    const inputForUpdateNewItem = this.renderCarsUpdateColorInput();
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
}

class WinnersPage implements Page {
  constructor() {
   // 
  }

  public render() {
    this.renderWinnersTitle();
    this.renderWinners();
  }
  
  renderWinnersTitle() {
    throw new Error("Method not implemented.");
  }
  renderWinners() {
    throw new Error("Method not implemented.");
  }
}

class AppView {
  private readonly garagePage: GaragePage;
  private readonly winnersPage: WinnersPage;

  constructor() {
    this.garagePage = new GaragePage();
    this.winnersPage = new WinnersPage();
  }

  public renderPage() {
    this.renderGaragePage();
    this.renderWinnerPage();
  }

  private renderGaragePage() {
    this.garagePage.render();
  }

  private renderWinnerPage() {
    this.winnersPage.render();
  }
}