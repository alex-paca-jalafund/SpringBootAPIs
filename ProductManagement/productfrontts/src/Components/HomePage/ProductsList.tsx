import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import { Product } from '../../Types/Product';
import { fetchProducts } from '../../services/ProductService';
import ProductCard from './ProductCard';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const navigateCreateProduct = () =>{
    navigate(`/createForm`)
  }
  return (
    <div>
        <div className='flex'>
            <h2 className="text-red-400, bg-orange-300 h-5">Product List</h2>
            {error && <p>{error}</p>}
            <button className='' onClick={navigateCreateProduct}>
                <AddIcon/>
            </button>
        </div>
        <List>
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </List>
    </div>
  );
};

export default ProductList;
