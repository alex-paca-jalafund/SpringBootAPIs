package com.products.ProducstTest.Controllers;

import com.products.ProducstTest.dto.ProductDTO;
import com.products.ProducstTest.dto.ProductStockDto;
import com.products.ProducstTest.services.Concretes.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/products")
public class ProductController {
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductDTO> createproduct(@RequestBody ProductDTO productDTO){
        ProductDTO saved = productService.create(productDTO);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ProductDTO> getAllproducts(){
        return productService.getAll();
    }

    @GetMapping ("{id}")
    public ProductDTO getproductById(@PathVariable Long id){
        return productService.getByID(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductDTO> updateproduct(@PathVariable Long id, @RequestBody ProductDTO productDTO){
        ProductDTO updated = productService.update(id,productDTO);
        return new ResponseEntity<>(updated,  HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{id}")
    public void deleteproduct(@PathVariable Long id){
        productService.deleteById(id);
    }

    @PutMapping("stock/{id}")
    public ResponseEntity<ProductDTO> updateStock(@PathVariable Long id, @RequestBody ProductStockDto productstock){
        ProductDTO updatedStock = productService.updateStock(id,productstock);
        return new ResponseEntity<ProductDTO>(updatedStock, HttpStatus.OK);
    }
}
