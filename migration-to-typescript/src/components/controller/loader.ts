import { IPKey, IData } from '../types/types';
import { ICallBack } from '../types/types';
import { Statuses } from '../types/types';

class Loader {
  private readonly baseLink: string;
  private readonly options: IPKey;
  constructor(baseLink: string, options: IPKey) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: { endpoint: string; options?: object },
    callback = (): void => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  protected errorHandler<T extends Response>(res: T): T {
    const unauthorizedStatus = Statuses.unauthorized;
    const notFoundStatus = Statuses.notFound;
    if (!res.ok) {
      if (res.status === unauthorizedStatus || res.status === notFoundStatus)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  protected makeUrl(options: IPKey, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions] as string}&`;
    });

    return url.slice(0, -1);
  }

  protected load(method: string, endpoint: string, callback: (data: ICallBack<IData>) => void, options: IPKey) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((...args) => this.errorHandler(...args))
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
