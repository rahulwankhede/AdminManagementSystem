package com.wellsfargo.training.ams.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ams.model.Customer;
import com.wellsfargo.training.ams.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	

	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
	
	public List<Customer> getCustomers(){
		return customerRepository.findAll();
	}
	
	public Customer getCustomerById(int id){
		return customerRepository.findById(id).orElse(null);
	}
	public String deleteCustomer(int id){
		customerRepository.deleteById(id);
		return "Customer with id: "+id+" deleted.";
	}
}
