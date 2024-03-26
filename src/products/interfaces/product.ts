export interface Product {
  name: string;
  price: number;
  currency: string;
  category: string;
  measurements: {
    weight: number;
    width: number;
    height: number;
  };
}
