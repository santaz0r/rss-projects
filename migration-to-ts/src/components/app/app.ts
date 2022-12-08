import { IResponseArticleObj, IResponseSourcesObj } from './../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const buttonsContainer = document.querySelector<HTMLDivElement>('.sources');
        if (buttonsContainer)
            buttonsContainer.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: IResponseArticleObj): void => this.view.drawNews(data))
            );
        this.controller.getSources((data: IResponseSourcesObj): void => this.view.drawSources(data));
    }
}

export default App;
