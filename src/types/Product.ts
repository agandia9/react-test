export interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  material: string;
  type: string;
  category: string;
  options: {
    outOfStock: boolean;
    waterproof: boolean;
    original: boolean;
  };
}