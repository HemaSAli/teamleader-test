export type Product = {
  id: string;
  price: string;
  description: string;
  category: string;
};

export type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};
