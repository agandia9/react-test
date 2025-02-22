import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../services/productService";
import { Filters } from "../types/Filters";
import { SortOrder } from "../types/SortOrder";

export const useProducts = () => {
  const SIZE_ORDER = ["XS", "S", "M", "L", "XL"];

  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({ material: "", category: "", color: "", type: "" });
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.NONE);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products
  .filter((p) =>
    Object.entries(filters).every(([key, value]) =>
      !value || p[key as keyof Filters].toLowerCase().includes(value.toLowerCase())
    )
  )
  .sort((a, b) => {
    if (!sortOrder) return 0;

    const indexA = SIZE_ORDER.indexOf(a.size);
    const indexB = SIZE_ORDER.indexOf(b.size);

    return sortOrder === SortOrder.ASC ? indexA - indexB : indexB - indexA;
  });
  return { filteredProducts, setFilters, setSortOrder, filters };
};
