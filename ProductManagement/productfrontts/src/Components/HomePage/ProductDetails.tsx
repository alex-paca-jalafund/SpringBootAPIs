import { useEffect, useState } from "react";
import { Product } from "../../Types/Product";
import { fetchOneProduct } from "../../services/ProductService";
import { useParams } from "react-router-dom";
import { ProductRow } from "./proudctRow";



const ProductDetails: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { productId } = useParams<{ productId: string }>();
    useEffect(() => {
        const loadProduct = async () => {
            if(productId){
                try {
                    const cardProduct = await fetchOneProduct(parseInt(productId));
                    setProduct(cardProduct);
                    return cardProduct

                } catch (error) {
                    console.error("Error loading product:", error);
                }
            }
        };
        loadProduct();
    }, [productId]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
    <div>
        <div className="text-center font-bold">
            <h1>{product.name}</h1>
        </div>
        <div className="text-left bg-amber-400 p-5 rounded-lg">
            <ProductRow info={product.description} row="Description"/>
            <ProductRow info={product.category} row="Category"/>
            <ProductRow info={String(product.price)} row="Price"/>
            <ProductRow info={String(product.stock)} row="Stock"/>
        </div>
    </div>
    );
}

export default ProductDetails