package com.wellsfargo.training.ams.repository;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ams.model.Account;
import com.wellsfargo.training.ams.model.Customer;
/***
 *A repository class for Account that extends that JPA Repository interface which provides a set of
 *methods that can be used to interact with the database. 
 *
 */

public interface AccountRepository extends JpaRepository<Account,Integer>{

//	Account saveAll(Optional<Customer> cus);

}
