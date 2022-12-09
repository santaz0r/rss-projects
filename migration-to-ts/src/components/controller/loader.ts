import { Errors, IOptions, IResponseArticleObj, IResponseSourcesObj } from './../../types/index';
class Loader {
    readonly baseLink: string;
    readonly options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options }: { endpoint: string; options?: IOptions },
        callback = (data: IResponseArticleObj & IResponseSourcesObj) => {
            if (!data) console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options as IOptions);
    }

    private errorHandler(res: Response): Response {
        console.log('resres', res);
        if (!res.ok) {
            if (res.status === Errors.unauthorized || res.status === Errors.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl({ options, endpoint }: { options: IOptions; endpoint: string }): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: 'GET' | 'POST',
        endpoint: string,
        callback: (data: IResponseArticleObj & IResponseSourcesObj) => void,
        options: IOptions
    ): void {
        fetch(this.makeUrl({ options, endpoint }), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
