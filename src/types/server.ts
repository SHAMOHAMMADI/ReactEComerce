export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductsRating;
}

export interface ProductsRating {
  rate: number;
  count: number;
}
