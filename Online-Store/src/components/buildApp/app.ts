import { createCard } from '../createcards/card';
import { sortWithDataStorage } from '../sorting/sortWithDataStorage';
import { sortDefault } from '../sorting/sortDefault';
import { searchWithDataStorage } from '../search/searchWithDataStorage';
import { applyFilters } from '../filters/applyFilters';
import { IData } from '../types/interfaces';
import { slider } from '../rangeFilter/sliders';

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
    slider();
    sortList.addEventListener('click', () => {
      sortWithDataStorage();
    });
    searchField.addEventListener('click', () => {
      searchWithDataStorage();
    });
  }
}
export default App;
