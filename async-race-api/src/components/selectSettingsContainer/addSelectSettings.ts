import './selectSettingsContainer.css';
import { createElementOnPage } from "../createElementOnPage";

export function addSelectSettings() {
  const main = document.querySelector('.main') as HTMLElement;
  const selectSettingsSection = createElementOnPage('section', 'select-settings-section');
  main.append(selectSettingsSection);

  const createNewItemContainer = createElementOnPage('div', 'create-item-container');
  const inputForCreateNewItem = createElementOnPage('input', 'input-create-item');
  inputForCreateNewItem.setAttribute('autocomplete', 'off');
  const inputAddColorToItem = createElementOnPage('input', 'create-color');
  inputAddColorToItem.setAttribute('type', 'color');
  const btnCreateItem = createElementOnPage('button', 'create-item-btn');
  btnCreateItem.setAttribute('type', 'submit');
  btnCreateItem.textContent = 'CREATE';
  createNewItemContainer.append(inputForCreateNewItem, inputAddColorToItem, btnCreateItem);

  const updateItemContainer = createElementOnPage('div', 'update-item-container');
  const inputForUpdateNewItem = createElementOnPage('input', 'input-update-item');
  inputForUpdateNewItem.setAttribute('autocomplete', 'off');
  const inputUpdateColorOfItem = createElementOnPage('input', 'update-color');
  inputUpdateColorOfItem.setAttribute('type', 'color');
  const btnUpdateItem = createElementOnPage('button', 'update-item-btn');
  btnUpdateItem.setAttribute('type', 'submit');
  btnUpdateItem.textContent = 'UPDATE';
  updateItemContainer.append(inputForUpdateNewItem, inputUpdateColorOfItem, btnUpdateItem);

  const selectSettingsBtnContainer = createElementOnPage('div', 'select-settings-btn-container');
  const btnStartRace = createElementOnPage('button', 'start-race-btn');
  btnStartRace.setAttribute('type', 'submit');
  btnStartRace.textContent = 'RACE';
  const btnResetRace = createElementOnPage('button', 'reset-btn');
  btnResetRace.setAttribute('type', 'submit');
  btnResetRace.textContent = 'RESET';
  const btnGenerateItems = createElementOnPage('button', 'generate-btn');
  btnGenerateItems.setAttribute('type', 'submit');
  btnGenerateItems.textContent = 'GENERATE CARS';
  selectSettingsBtnContainer.append(btnStartRace, btnResetRace, btnGenerateItems);
  
  selectSettingsSection.append(createNewItemContainer, updateItemContainer, selectSettingsBtnContainer);
}