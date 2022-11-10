package com.wellsfargo.training.ams.account;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.wellsfargo.training.ams.model.Account;
import com.wellsfargo.training.ams.model.Branch;
import com.wellsfargo.training.ams.model.Customer;
import com.wellsfargo.training.ams.repository.AccountRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class AccountTest {
	@Autowired
	AccountRepository accountRepository;

	@Test
	@Order(1)
	public void addAccountTest(){
		Account account=new Account();
		account.setCustomer(new Customer(9999,"cfname15","clname15","street-15, Bangalore"));
		account.setBalance(5000);
		account.setBranch(new Branch(99,"Branch15","Street-15, Bangalore"));
		account.setOpeningDate("2022-11-15");
		Assertions.assertNotNull(accountRepository.save(account));
	}
	
	@Test
	@Order(2)
	public void getAccountsTest(){
		List<Account> accountList=accountRepository.findAll();
		assertThat(accountList).size().isGreaterThan(0);
	}
	
	@Test
	@Order(3)
	public void getAccountByIdTest(){
		List<Account> accountList=accountRepository.findAll();
		int accountId=accountList.get(0).getAccountNo();
		assertThat(accountRepository.existsById(accountId)).isTrue();
	}
	
	@Test
	@Order(4)
	public void deleteAccountTest(){
		List<Account> accountList=accountRepository.findAll();
		int accountId=accountList.get(0).getAccountNo();
		accountRepository.deleteById(accountId);
		assertThat(accountRepository.existsById(accountId)).isFalse();
	}

}
