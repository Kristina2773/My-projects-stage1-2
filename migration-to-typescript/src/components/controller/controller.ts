import AppLoader from './appLoader';
import { ICallBack } from '../types/types';

class AppController extends AppLoader {
  public getSources<T>(callback?: ICallBack<T>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews<T>(e: MouseEvent, callback?: ICallBack<T>): void {
    let target = e.target as HTMLSpanElement;
    const newsContainer = e.currentTarget as HTMLDivElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
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
        return;
      }
      target = target.parentNode as HTMLSpanElement;
    }
  }
}

export default AppController;
