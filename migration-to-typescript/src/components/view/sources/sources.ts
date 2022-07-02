import './sources.css';
import { IDataSources } from '../../types/types';

class Sources {
  draw(data: Array<IDataSources>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item: IDataSources) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      ((sourceClone as ParentNode).querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      ((sourceClone as ParentNode).querySelector('.source__item') as HTMLElement).setAttribute(
        'data-source-id',
        item.id
      );

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
