package com.wellsfargo.training.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ams.model.Account;
import com.wellsfargo.training.ams.model.FetchObjects;
import com.wellsfargo.training.ams.service.AccountService;
/***
 *Contains all the REST methods related to Account- used to map and handle all the
 *HTTP requests from the client
 *
 */
@RestController
public class AccountController {
	@Autowired
	private AccountService accountService;
	
	@PostMapping("/addAccount")
	public Account addAccount(@RequestBody FetchObjects fetchObjects){
		
		return accountService.saveAccount(fetchObjects);
	}
	@GetMapping("/getAccounts")
	public ResponseEntity<List<Account>> getAccounts(){
//		return type for this method - ResponseEntity
		return ResponseEntity.ok(accountService.getAccounts());
//		return accountService.getAccounts();
	}
	@GetMapping("/getAccountById/{id}")
	@ResponseBody
	public Account getAccountById(@PathVariable int id){
		return accountService.getAccountById(id);
	}
	@DeleteMapping("/deleteAccount/{id}")
	@ResponseBody
	public String deleteAccount(@PathVariable int id){
		return accountService.deleteAccount(id);
	}
}
