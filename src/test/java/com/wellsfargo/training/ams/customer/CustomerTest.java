package com.wellsfargo.training.ams.customer;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.wellsfargo.training.ams.model.Customer;
import com.wellsfargo.training.ams.repository.CustomerRepository;

@SpringBootTest
public class CustomerTest {
	@Autowired
	CustomerRepository customerRepository;
	
	@Test
	public void addCustomerTest(){
		Customer customer=new Customer();
		customer.setFirstName("cfname");
		customer.setLastName("clname1");
		customer.setAddress("streee-1,Bangalore");
		Assertions.assertNotNull(customerRepository.save(customer));
	}
	
	@Test
	public void getCustomersTest(){
		List<Customer> customerList=customerRepository.findAll();
		assertThat(customerList).size().isGreaterThan(0);
	}
	
	@Test
	public void getCustomerByIdTest(){
		List<Customer> customerList=customerRepository.findAll();
		int customerId=customerList.get(0).getId();
		assertThat(customerRepository.existsById(customerId)).isTrue();
	}
	
	@Test
	public void deleteCustomerTest(){
		List<Customer> customerList=customerRepository.findAll();
		int customerId=customerList.get(0).getId();
		customerRepository.deleteById(customerId);
		assertThat(customerRepository.existsById(customerId)).isFalse();
	}

}
