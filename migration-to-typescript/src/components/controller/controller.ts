import AppLoader from './appLoader';
import { IDataNews, IData, ICallBack } from '../types/types';

class AppController extends AppLoader {
  public getSources(callback?: ICallBack<IData>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews(e: MouseEvent, callback?: ICallBack<IDataNews>) {
    let target = e.target as HTMLSpanElement;
    const newsContainer = e.currentTarget as HTMLDivElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId as string);
          if (sourceId) {
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
        }
        return;
      }
        target = target.parentNode as HTMLSpanElement;
    }
  }
}

export default AppController;
