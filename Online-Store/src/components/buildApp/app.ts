// import { createCard } from '../createcards/card';
import { sortWithDataStorage } from '../sorting/sortWithDataStorage';
import { sortDefault } from '../sorting/sortDefault';
import { searchWithDataStorage } from '../search/searchWithDataStorage';
import { applyFilters } from '../filters/applyFilters';
import { slider } from '../rangeFilter/sliders';
import { resetFilters } from '../clearButtons/buttonResetFilters';
import { clearLocalStorage } from '../clearButtons/buttonResetSettings';

class App {
  public start(): void {
    const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
    const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
    const btnFilters = document.querySelectorAll('.reset-btn_filter');
    const btnSettings = document.querySelectorAll('.reset-btn_settings');
    sortDefault();
    applyFilters();
    slider();
    sortList.addEventListener('change', () => {
      sortWithDataStorage();
    });
    searchField.addEventListener('click', () => {
      searchWithDataStorage();
    });
    btnFilters?.forEach((btn) => {
      btn.addEventListener('click', () => {
        resetFilters();
      });
    });
    btnSettings?.forEach((btn) => {
      btn.addEventListener('click', () => {
        clearLocalStorage();
      });
    });
  }
}
export default App;
