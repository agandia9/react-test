import { Grid, Card, CardContent, Typography } from "@mui/material";
import {CheckCircle, Cancel} from '@mui/icons-material';
import { Product } from "../../types/Product";
import "./ProductItem.css"

interface Props {
  product: Product;
}

const getProductOptionIcon = (productOption: boolean): React.ReactNode => 
  productOption ? <CheckCircle color="success" /> : <Cancel color="error"/>;

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <Card>
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <div className="ProductItem__InfoSection">
            <div className="ProductItem__MainInfo">
              <Typography variant="body2">Size: {product.size}</Typography>
              <Typography variant="body2">Color: {product.color}</Typography>
              <Typography variant="body2">Material: {product.material}</Typography>
              <Typography variant="body2">Category: {product.category}</Typography>
              <Typography variant="body2">Type: {product.type}</Typography>
            </div>
            <div className="ProductItem__ExtraInfo">
              <Typography variant="body2">Original: { getProductOptionIcon(product.options.original) }</Typography>
              <Typography variant="body2">Out of stock: { getProductOptionIcon(product.options.outOfStock) }</Typography>
              <Typography variant="body2">Waterproof: { getProductOptionIcon(product.options.waterproof) }</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProductItem;