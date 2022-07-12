import './sources.css';
import { IDataSources } from '../../types/types';

class Sources {
  public draw(data: Array<IDataSources>): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    const select = <HTMLSelectElement>document.querySelector('.select');
    data.forEach((item: IDataSources) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as ParentNode;
      if (item.category === select.value) {
        if (sourceClone) {
          (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
          (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
          fragment.append(sourceClone);
        }
      }
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
