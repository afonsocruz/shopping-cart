export type ProductsType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: ProductRating;
};

type ProductRating = {
  rate: number;
  count: number;
};
