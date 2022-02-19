export type Product = {
  'product-id': string;
  'unit-price': string;
};

export type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};
