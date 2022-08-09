import { IDataController } from '../interfaces/interfaces';
import { DataModal } from './dataModal';

export class DataController implements IDataController {
  public async getData() {
    const dataController = new DataModal();
    const data = await dataController.getOrDeleteData('GET', 'http://127.0.0.1:3000/garage');
    return data;
  }

  public async postData() {
    const [createInput, createColor] = ['.input-create-item', '.input-create-color']
      .map((item) =>
        document.querySelector<HTMLInputElement>(item));

    const dataController = new DataModal();
    const data = await dataController.putOrPostData('POST', 'http://127.0.0.1:3000/garage', {
      name: createInput?.value as string,
      color: createColor?.value as string,
    });
    return data;
  }

  public async deleteData(id: number) {
    const dataController = new DataModal();
    const data = await dataController.getOrDeleteData('DELETE', `http://127.0.0.1:3000/garage/${id}`);
    return data;
  }

  public async putData(id: number) {
    const [updateInput, updateColorInput] = ['.input-update-item', '.update-color']
      .map((item) =>
        document.querySelector<HTMLInputElement>(item));
    const dataController = new DataModal();
    const data = await dataController.putOrPostData('PUT', `http://127.0.0.1:3000/garage/${id}`, {
      name: updateInput?.value as string,
      color: updateColorInput?.value as string,
    });
    return data;
  }
}
