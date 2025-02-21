import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types/Product";

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">Size: {product.size}</Typography>
              <Typography variant="body2">Color: {product.color}</Typography>
              <Typography variant="body2">Material: {product.material}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
