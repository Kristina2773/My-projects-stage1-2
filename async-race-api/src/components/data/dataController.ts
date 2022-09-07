import { IDataController } from '../interfaces/interfaces';
import { DataModal } from './dataModal';
import { url } from '../const/data-const';

export class DataController implements IDataController {
  url: string;

  dataModal: DataModal;

  constructor() {
    this.url = url;
    this.dataModal = new DataModal();
  }

  public async getData<T>(): Promise<T> {
    const data: T = await this.dataModal.getData(`${this.url}/garage`);
    return data;
  }

  public async postData<T>(): Promise<T> {
    const [createInput, createColor] = ['.input-create-item', '.input-create-color']
      .map((item) =>
        document.querySelector<HTMLInputElement>(item));

    const data = <T> await this.dataModal.postData(`${this.url}/garage`, {
      name: createInput?.value as string,
      color: createColor?.value as string,
    });
    return data;
  }

  public async deleteData<T>(id: number): Promise<T> {
    const data = <T> await this.dataModal.deleteData(`${this.url}/garage/${id}`);
    return data;
  }

  public async putData<T>(id: number): Promise<T> {
    const [updateInput, updateColorInput] = ['.input-update-item', '.update-color']
      .map((item) =>
        document.querySelector<HTMLInputElement>(item));
    const data = <T> await this.dataModal.putData(`${this.url}/garage/${id}`, {
      name: updateInput?.value as string,
      color: updateColorInput?.value as string,
    });
    return data;
  }
}
