import React, { useState, useEffect } from "react";
import FormularyTextField from "./utils/FormTextField";
import { useParams } from "react-router-dom";
import { Product } from "../../Types/Product";
import { fetchProducts, updateProduct } from "../../services/ProductService";

const UpdateProduct = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const products = await fetchProducts();
                const productToEdit = products.find(p => p.id === parseInt(productId || "0"));
                if (productToEdit) {
                    setProduct(productToEdit);
                } else {
                    setError("Product not found.");
                }
            } catch (error) {
                console.error("Error loading product:", error);
                setError("Failed to load product.");
            }
        };
        loadProduct();
    }, [productId]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!product) return;

        try {
            const updatedProduct = await updateProduct(product.id, product);
            setSuccess("Product updated successfully!");
            setError(null);
            console.log("Updated product:", updatedProduct);
        } catch (error) {
            console.error("Error updating product:", error);
            setError("Failed to update product. Please try again.");
            setSuccess(null);
        }
    };

    const handleInputChange = (field: keyof Product, value: string) => {
        setProduct(prev => prev ? { ...prev, [field]: value } : null);
    };

    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
        <React.Fragment>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <FormularyTextField
                    label="Name"
                    type="text"
                    value={product.name}
                    onChangeform={(e) => handleInputChange("name", e.target.value)}
                />
                <FormularyTextField
                    label="Description"
                    type="text"
                    value={product.description}
                    onChangeform={(e) => handleInputChange("description", e.target.value)}
                />
                <FormularyTextField
                    label="Price"
                    type="text"
                    value={product.price.toString()}
                    onChangeform={(e) => handleInputChange("price", e.target.value)}
                />
                <FormularyTextField
                    label="Stock"
                    type="text"
                    value={product.stock.toString()}
                    onChangeform={(e) => handleInputChange("stock", e.target.value)}
                />
                <FormularyTextField
                    label="Category"
                    type="text"
                    value={product.category}
                    onChangeform={(e) => handleInputChange("category", e.target.value)}
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 ..." type="submit">Update Product</button>
            </form>
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </React.Fragment>
    );
};

export default UpdateProduct;
