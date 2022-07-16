import { createCard } from '../createcards/card';
import data from '../../database.json';
import { sortWithDataStorage, sortDefault } from '../sorting/sort';
import { searchWithDataStorage } from '../search/search';
import { applyFilters } from '../filters/applyFilters';
import { IData } from '../types/interfaces';

class App {
  public start(): void {
    const dataBuild = JSON.parse(localStorage.getItem('Data') as string) as Array<IData>;
    const searchField = document.querySelector('.search-and-sorting__input-field_search') as HTMLInputElement;
    const sortList = document.querySelector('.search-and-sorting__sort-category') as HTMLSelectElement;
    if (dataBuild && dataBuild.length !== 0) {
      createCard(dataBuild);
    } else {
      sortDefault();
    }
    applyFilters();
    sortList.addEventListener('click', () => {
      sortWithDataStorage();
    });
    searchField.addEventListener('click', () => {
      searchWithDataStorage();
    });
  }
}
export default App;
