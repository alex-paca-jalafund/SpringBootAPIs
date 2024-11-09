
import { Product } from "../Types/Product";
import axiosInstance from "../api/axiosInstance";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<Product[]>(`/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchOneProduct = async (productId : number): Promise<Product> => {
    try {
      const response = await axiosInstance.get<Product>(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await axiosInstance.post<Product>(`/products`, product);
  return response.data;
};

export const updateProduct = async (productId: number, product: Product): Promise<Product> => {
  const response = await axiosInstance.put<Product>(`/products/${productId}`, product);
  return response.data;
};

export const deleteProduct = async (productID: number): Promise<void> => {
  await axiosInstance.delete(`/products/${productID}`);
};
