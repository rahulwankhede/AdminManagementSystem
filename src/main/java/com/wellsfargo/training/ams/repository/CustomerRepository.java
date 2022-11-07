package com.wellsfargo.training.ams.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ams.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
