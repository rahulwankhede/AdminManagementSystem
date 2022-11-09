package com.wellsfargo.training.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ams.model.Customer;
import com.wellsfargo.training.ams.service.CustomerService;
/***
 *Contains all the REST methods related to Customer- used to map and handle all the
 *HTTP requests from the client
 */
@RestController
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer){
		return customerService.saveCustomer(customer);
	}
	@GetMapping("/getCustomers")
	public List<Customer> getCustomers(){
		return customerService.getCustomers();
	}
	@GetMapping("/getCustomerById/{id}")
	@ResponseBody
	public Customer getCustomerById(@PathVariable int id){
		return customerService.getCustomerById(id);
	}
	@DeleteMapping("/deleteCustomer/{id}")
	@ResponseBody
	public String deleteCustomer(@PathVariable int id){
		return customerService.deleteCustomer(id);
	}
	
	
}
