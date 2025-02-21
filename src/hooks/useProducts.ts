import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../services/productService";
import { Filters } from "../types/Filters";
import { SortOrder } from "../types/SortOrder";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({ material: "", category: "", color: "", type: "" });
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.NONE);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products
  .filter((p) => Object.entries(filters).every(([key, value]) => !value || p[key as keyof Filters] === value))
  .sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === SortOrder.ASC ? a.size.localeCompare(b.size) : b.size.localeCompare(a.size);
  });
  return { filteredProducts, setFilters, setSortOrder };
};
