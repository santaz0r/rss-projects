import { IArticle } from './../../../types/index';
import './news.css';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        const newsContainer = document.querySelector<HTMLDivElement>('.news');

        news.forEach((item, idx) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLDivElement;
                const newsItem = newsClone.querySelector<HTMLDivElement>('.news__item');
                const metaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
                const metaAuthor = newsClone.querySelector<HTMLLIElement>('.news__meta-author');
                const metaDate = newsClone.querySelector<HTMLDataElement>('.news__meta-date');
                const descriptionTitle = newsClone.querySelector<HTMLTitleElement>('.news__description-title');
                const descriptionSource = newsClone.querySelector<HTMLTitleElement>('.news__description-source');
                const descriptionContent = newsClone.querySelector<HTMLParagraphElement>('.news__description-content');
                const source = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');

                if (idx % 2 && newsItem) newsItem.classList.add('alt');
                if (metaPhoto)
                    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                if (metaAuthor) metaAuthor.textContent = item.author || item.source.name;
                if (metaDate) metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                if (descriptionTitle) descriptionTitle.textContent = item.title;
                if (descriptionSource) descriptionSource.textContent = item.source.name;

                if (descriptionContent) descriptionContent.textContent = item.description;

                if (source) source.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
