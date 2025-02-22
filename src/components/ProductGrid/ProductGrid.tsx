import { Grid } from "@mui/material";
import { Product } from "../../types/Product";
import "./ProductGrid.css"
import ProductItem from "../ProductItem/ProductItem";

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={2} className="ProductGrid__Container">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
