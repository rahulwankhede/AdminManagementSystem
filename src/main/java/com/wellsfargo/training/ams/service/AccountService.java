package com.wellsfargo.training.ams.service;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ams.model.Account;
import com.wellsfargo.training.ams.model.Branch;
import com.wellsfargo.training.ams.model.Customer;
import com.wellsfargo.training.ams.model.FetchObjects;
import com.wellsfargo.training.ams.repository.AccountRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private BranchService branchService;
	
	
	public Account saveAccount(FetchObjects fetchObjects) {
		Customer cus=customerService.getCustomerById(fetchObjects.getCustomer_id());
		Branch b = branchService.getBranchById(fetchObjects.getBranch_id());
		Account acc=new Account();
		acc.setCustomer(cus);
		acc.setBranch(b);
		acc.setBalance(fetchObjects.getBalance());
		acc.setOpeningDate(fetchObjects.getOpeningDate());
		//System.out.println(acc.toString());
		if(cus==null || b==null) {
			return null;
		}
		return accountRepository.save(acc);
	}
	
	public List<Account> getAccounts(){
		return accountRepository.findAll();
	}
	
	public Account getAccountById(int id){
		return accountRepository.findById(id).orElse(null);
	}
	public String deleteAccount(int id){
		accountRepository.deleteById(id);
		return "Customer with id: "+id+" deleted.";
	}
}
