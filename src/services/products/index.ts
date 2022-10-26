import { api } from "../api"

type Products = {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
  rating: ProductRating
}

export type GetProductsResponse = {
  products: Products[];
}

type ProductRating = {
  rate: number,
  count: number
}

export const getProducts = async (): Promise<GetProductsResponse> => {
  const result = await api.get<Products[]>("/products", {
    headers: {
      Accept: "application/json",
    }
  })

  console.log(result.data)
  
  return result.data;
}