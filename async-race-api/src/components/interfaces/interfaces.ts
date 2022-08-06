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
  getOrDeleteData: (method: string, url: string) => Promise<CarType | CarType[] | string>;
  putOrPostData: (method: string, url: string, data: DataResponse) => Promise<CarType | CarType[] | string>

}
export type DataResponse = {
  name: string;
  color: string;
}
export type CarType = {
  name: string;
  color: string;
  id: number;
}