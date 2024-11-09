import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Product } from '../../Types/Product';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

 const navigate = useNavigate();
  const handleNavigate = ()=> {
    navigate(`/productDetails/${product.id}`)
  }

  const handleNavigateUpdate = ()=> {
    navigate(`/updateForm/${product.id}`)
  }
  return (
    <div>
      <ListItem>
        <ListItemText className='bg-teal-200'
          primary={product.name}
          secondary={`Price: $${product.price} | Stock: ${product.stock}`}
        />
        <button onClick={handleNavigate}> Details </button>
        <button onClick={handleNavigateUpdate}> Update </button>
      </ListItem>
    </div>
  );
};

export default ProductCard;
