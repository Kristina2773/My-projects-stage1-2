import {IPKey, IData, IResult} from '../types/types';

class Loader {
    baseLink: string;
    options: IPKey;
    constructor(baseLink : string, options : IPKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {}} : {endpoint: string, options?: IPKey | Partial<object>},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler<T extends IResult>(res : T) : T {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options : IPKey, endpoint : string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method : string, endpoint : string, callback : (data : IData) => void, options : IPKey) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
