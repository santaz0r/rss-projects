import { ISources } from './../../../types/index';
import './sources.css';

class Sources {
    draw(data: ISources[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        const sourcesContainer = document.querySelector<HTMLDivElement>('.sources');
        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

                const sourceItemName = sourceClone.querySelector<HTMLDivElement>('.source__item-name');
                const sourceItem = sourceClone.querySelector<HTMLSpanElement>('.source__item');

                if (sourceItemName) sourceItemName.textContent = item.name;
                if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        if (sourcesContainer) sourcesContainer.append(fragment);
    }
}

export default Sources;
