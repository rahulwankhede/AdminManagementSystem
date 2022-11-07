package com.wellsfargo.training.ams.repository;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ams.model.Account;
import com.wellsfargo.training.ams.model.Customer;

public interface AccountRepository extends JpaRepository<Account,Integer>{

//	Account saveAll(Optional<Customer> cus);

}
