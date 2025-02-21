import { useProducts } from "./hooks/useProducts";
import ProductGrid from "./components/ProductGrid";
import FiltersComponent from "./components/Filters";
import { Container } from "@mui/material";
import SortOptions from "./components/SortOptions";

function App() {
  const { filteredProducts, setFilters, setSortOrder } = useProducts();

  return (
    <Container>
      <h1>Products</h1>
      <FiltersComponent filters={{ material: "", category: "", color: "", type: "" }} setFilters={setFilters} />
      <SortOptions setSortOrder={setSortOrder}/>
      <ProductGrid products={filteredProducts} />
    </Container>
  );
}

export default App;
