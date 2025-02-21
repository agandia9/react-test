import { Product } from "../types/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/data/products.json");
    console.log(response)
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};