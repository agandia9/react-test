import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Product } from "../../types/Product";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
    return (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">Size: {product.size}</Typography>
              <Typography variant="body2">Color: {product.color}</Typography>
              <Typography variant="body2">Material: {product.material}</Typography>
              <Typography variant="body2">Category: {product.category}</Typography>
              <Typography variant="body2">Type: {product.type}</Typography>
            </CardContent>
          </Card>
        </Grid>
    )
}

export default ProductItem;