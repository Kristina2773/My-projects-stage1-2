import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews, IData } from '../types/types';
class App {
  public controller: AppController;
  public view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data: IDataNews | undefined) => {
        if (data) {
          this.view.drawNews(data);
        }
      })
    );
    this.controller.getSources((data: IData | undefined) => {
      if (data) {
        this.view.drawSources(data);
      }
    });
  }
}

export default App;
