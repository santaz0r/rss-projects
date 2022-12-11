import { ISources } from './../../../types/index';
import './sources.css';
import { paginate } from '../../../utils/paginate';

class Sources {
    draw(data: ISources[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const contentSize = 5;
        const currentPage = 1;
        const pageCount = Math.ceil(data.length / contentSize);
        const paginationArray = new Array(pageCount).fill(1).map((i, index) => (i += index));

        const sourcesContainer = document.querySelector<HTMLDivElement>('.sources');
        function drawSources(items: ISources[], currentPage: number) {
            const arr = paginate(items, currentPage, contentSize);
            arr.forEach((item) => {
                if (sourceItemTemp) {
                    const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

                    const sourceItemName = sourceClone.querySelector<HTMLDivElement>('.source__item-name');
                    const sourceItem = sourceClone.querySelector<HTMLSpanElement>('.source__item');

                    if (sourceItemName) sourceItemName.textContent = item.name;
                    if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            });
            sourcesContainer?.append(fragment);
        }
        drawSources(data, currentPage);

        if (sourcesContainer) {
            sourcesContainer.append(fragment);
            sourcesContainer.insertAdjacentHTML(
                'afterend',
                `<nav>
            <ul class="navigation">${paginationArray
                .map((i, index) => {
                    return `
                <li class="navigation__item${currentPage === index + 1 ? ' active' : ''}" >${i}</li>`;
                })
                .join('')}</ul>
            </nav>`
            );
        }
        const liArr = document.querySelectorAll<HTMLLIElement>('.navigation__item');
        liArr.forEach((li) => {
            li.addEventListener('click', () => {
                liArr.forEach((i) => i.classList.remove('active'));
                if (sourcesContainer) sourcesContainer.innerHTML = '';
                if (li.textContent) drawSources(data, +li.textContent);
                li.classList.add('active');
            });
        });
    }
}

export default Sources;
