import { useProducts } from "./hooks/useProducts";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import FiltersComponent from "./components/Filters/Filters";
import { Container } from "@mui/material";
import SortOptions from "./components/SortOptions/SortOptions";
import "./App.css"

function App() {
  const { filteredProducts, setFilters, setSortOrder, filters } = useProducts();

  return (
    <Container className="MainContainer" maxWidth={false}>
      <h1 className="MainContainer__Title">Products</h1>
      <FiltersComponent filters={filters} setFilters={setFilters} />
      <SortOptions setSortOrder={setSortOrder}/>
      <ProductGrid products={filteredProducts} />
    </Container>
  );
}

export default App;
