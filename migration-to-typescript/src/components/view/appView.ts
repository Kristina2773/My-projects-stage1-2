import News from './news/news';
import Sources from './sources/sources';
import { IDataNews, IData } from '../types/types';

export class AppView {
  public news: News;
  public sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IDataNews) {
    const values = data.articles ? data.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: IData) {
    const values = data.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
