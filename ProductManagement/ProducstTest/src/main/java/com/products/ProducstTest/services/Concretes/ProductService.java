package com.products.ProducstTest.services.Concretes;

import com.products.ProducstTest.Entity.Product;
import com.products.ProducstTest.Exceptions.NotFoundException;
import com.products.ProducstTest.Mapper.ProductMapper;
import com.products.ProducstTest.dto.ProductDTO;
import com.products.ProducstTest.dto.ProductStockDto;
import com.products.ProducstTest.repository.IProductRepository;
import com.products.ProducstTest.services.IProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class ProductService implements IProductService {

    IProductRepository productRepository;

    @Override
    public ProductDTO create(ProductDTO productDTO) {
        Product product = productRepository.save(ProductMapper.productDtoToProduct(productDTO));
        return ProductMapper.productToProductDto(product);
    }

    @Override
    public List<ProductDTO> getAll() {
        return productRepository.findAll().stream().map((product -> ProductMapper.productToProductDto(product))).toList();
    }

    @Override
    public ProductDTO getByID(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(()-> new NotFoundException("Product with Id Not Found: " + id));
        return ProductMapper.productToProductDto(product);
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public ProductDTO update(Long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id)
                .orElseThrow(()-> new NotFoundException ("Product with id not found" + id));
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setStock(productDTO.getStock());
        product.setPrice(productDTO.getPrice());
        product.setCategory(productDTO.getCategory());

        Product updated = productRepository.save(product);
        return ProductMapper.productToProductDto(updated);
    }

    public ProductDTO updateStock(Long id, ProductStockDto stock){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product with ID not found" + id));
        product.setStock(stock.getStock());
        Product updated = productRepository.save(product);
        return ProductMapper.productToProductDto(updated);
    }
}
