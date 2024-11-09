package com.products.ProducstTest.repository;

import com.products.ProducstTest.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Long> {

}
