import { sortWithDataStorage } from '../sorting/sortWithDataStorage';
import { sortDefault } from '../sorting/sortDefault';
import { searchWithDataStorage } from '../search/searchWithDataStorage';
import { applyFilters } from '../filtersValue/applyFilters';
import { slider } from '../rangeFilter/sliders';
import { resetFilters } from '../clearButtons/buttonResetFilters';
import { clearLocalStorage } from '../clearButtons/buttonResetSettings';
import { makeButtonsActive } from '../activeBunttons/activeBtns';

class App {
  public start(): void {
    const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
    const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
    const btnFilters = document.querySelectorAll('.reset-btn_filter');
    const btnSettings = document.querySelectorAll('.reset-btn_settings');
    sortDefault();
    applyFilters();
    makeButtonsActive();
    slider();
    sortList.addEventListener('change', () => {
      sortWithDataStorage();
    });
    sortList.removeEventListener('change', () => {
      sortWithDataStorage();
    });
    searchField.addEventListener('click', () => {
      searchWithDataStorage();
    });
    searchField.removeEventListener('click', () => {
      searchWithDataStorage();
    });
    btnFilters?.forEach((btn) => {
      btn.addEventListener('click', () => {
        resetFilters();
      });
      btn.removeEventListener('click', () => {
        resetFilters();
      });
    });
    btnSettings?.forEach((btn) => {
      btn.addEventListener('click', () => {
        clearLocalStorage();
      });
      btn.removeEventListener('click', () => {
        clearLocalStorage();
      });
    });
  }
}
export default App;
