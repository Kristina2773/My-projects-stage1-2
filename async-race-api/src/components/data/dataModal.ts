import { DataResponse } from '../interfaces/interfaces';
import { CarType } from '../interfaces/interfaces';

export class DataModal {
  public async getData(url: string): Promise<CarType | CarType[] | string> {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json() as Promise<CarType | CarType[] | string>;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      const unexpectedErrorMessage = 'An unexpected error occurred';
      throw new Error(unexpectedErrorMessage);
    }
  }

  public async deleteData(url: string): Promise<CarType | CarType[] | string> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json() as Promise<CarType | CarType[] | string>;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      const unexpectedErrorMessage = 'An unexpected error occurred';
      throw new Error(unexpectedErrorMessage);
    }
  }

  public async putData(url: string, data: DataResponse) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json() as Promise<CarType | CarType[] | string>;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      const unexpectedErrorMessage = 'An unexpected error occurred';
      throw new Error(unexpectedErrorMessage);
    }
  }

  public async postData(url: string, data: DataResponse) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json() as Promise<CarType | CarType[] | string>;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      const unexpectedErrorMessage = 'An unexpected error occurred';
      throw new Error(unexpectedErrorMessage);
    }
  }
}
