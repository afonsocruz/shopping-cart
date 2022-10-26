import { api } from "../api";
import { AxiosResponse } from "axios";
import { ProductsType } from "../../types/products";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => api.get(url).then(responseBody),
};

export const Products = {
  getProducts: (): Promise<ProductsType[]> => requests.get("products"),
};
