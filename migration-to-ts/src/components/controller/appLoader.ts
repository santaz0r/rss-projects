import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '40d7e4f08e8b4e0489aa487d328a88f7', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
