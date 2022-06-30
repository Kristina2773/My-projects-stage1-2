import './sources.css';
import {IDataNews, ISources} from '../../types/types';

class Sources {
    draw(data : Array<ISources>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement> document.querySelector('#sourceItemTemp');

        data.forEach((item : ISources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            ((sourceClone as ParentNode).querySelector('.source__item-name') as HTMLElement).textContent = item.source.name;
            ((sourceClone as ParentNode).querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.source.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
