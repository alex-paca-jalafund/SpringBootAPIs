package com.products.ProducstTest.services;

import com.products.ProducstTest.dto.ProductDTO;

import java.util.List;

public interface IProductService {
    public ProductDTO create(ProductDTO productDTO);
    public List<ProductDTO> getAll();
    public ProductDTO getByID(Long id);
    public void deleteById(Long id);
    public ProductDTO update(Long id, ProductDTO productDTO);
}
