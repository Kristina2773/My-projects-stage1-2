import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'eec821eb416d45aba16a3dcfcdeacf2a',
    });
  }
}

export default AppLoader;
