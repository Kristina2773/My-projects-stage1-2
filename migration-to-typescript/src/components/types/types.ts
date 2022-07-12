export interface IDataNews {
  status: string;
  totalResults: number;
  articles: Array<ISources>;
}
export interface IData {
  status: string;
  sources: Array<IDataSources>;
}
export type IDataSources = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};
export type ISources = {
  source: {
    name: string;
    id: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
export interface IPKey {
  apiKey?: string;
}
export interface IResult {
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}

export interface ICallBack<T> {
  (data?: T): T | void;
}

export interface IOptions {
  sources?: string;
}
