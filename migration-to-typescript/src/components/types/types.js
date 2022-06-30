export interface IDataNews {
  status: string;
  totalResults: number;
  articles: ReadonlyArray<ISources>;
}

export interface ISources {
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
}