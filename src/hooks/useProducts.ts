import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../services/productService";
import { Filters } from "../types/Filters";
import { SortOrder } from "../types/SortOrder";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({ material: "", category: "", color: "", type: "" });
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products;
  return { filteredProducts, setFilters, setSortOrder };
};
