export interface IData {
  title: string;
  img: string;
  quantity: number;
  releaseYear: number;
  brand: string;
  size: string;
  color: string;
}

export interface IFilter {
  filterBySize?: Array<string>;
  filterByColor?: Array<string>;
  filterByBrand?: Array<string>;
  filterByYear?: Array<string>;
  filterByQuantity?: Array<string>;
}
