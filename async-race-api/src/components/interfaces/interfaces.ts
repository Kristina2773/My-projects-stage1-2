export type DataResponse = {
  name: string;
  color: string;
};
export type CarType = {
  name: string;
  color: string;
  id: number;
};
export interface IPage {
  render: () => void;
}
export interface ICarItem {
  render: () => void;
}
export interface IData {
  render: () => void;
}
export interface IDataController {
  getData: () => Promise<CarType | CarType[] | string>;
}
export interface IModalData {
  getOrDeleteData: () => Promise<CarType | CarType[] | string>;
  putOrPostData: () => Promise<CarType | CarType[] | string>;
}
