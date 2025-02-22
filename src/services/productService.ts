import { Product } from "../types/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/data/products.json");
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};