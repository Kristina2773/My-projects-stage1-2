import { IModalData } from "../interfaces/interfaces";
import { DataResponse } from "../interfaces/interfaces";

export class DataModal implements IModalData {
  public async getOrDeleteData(method: string, url: string){
    try {
      const response = await fetch(url, {
        method: method,
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        const unexpectedErrorMessage = "An unexpected error occurred";
        return unexpectedErrorMessage;
      }
    }
  }
  public async putOrPostData(method: string, url: string, data: DataResponse){
    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        const unexpectedErrorMessage = "An unexpected error occurred";
        return unexpectedErrorMessage;
      }
    }
  }
}