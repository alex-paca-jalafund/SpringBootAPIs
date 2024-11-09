package com.products.ProducstTest.Mapper;

import com.products.ProducstTest.Entity.Product;
import com.products.ProducstTest.dto.ProductDTO;

public class ProductMapper {
    public static Product productDtoToProduct(ProductDTO productdto){
        return new Product(
                productdto.getId(),
                productdto.getName(),
                productdto.getDescription(),
                productdto.getPrice(),
                productdto.getStock(),
                productdto.getCategory()
        );
    }

    public static ProductDTO productToProductDto(Product product){
        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getStock(),
                product.getCategory()
        );
    }
}
