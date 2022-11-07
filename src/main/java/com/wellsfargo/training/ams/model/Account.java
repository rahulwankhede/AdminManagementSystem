package com.wellsfargo.training.ams.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "Account")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "account_generator")
	private int accountNo;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	private Customer customer;


	private double balance;

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "branch_id")
	private Branch branch;


	private String openingDate;

	public Account() {
		super();
	}

	public Account(int accountNo, Customer customer, double balance, Branch branch, String openingDate) {
		super();
		this.accountNo = accountNo;
		this.customer = customer;
		this.balance = balance;
		this.branch = branch;
		this.openingDate = openingDate;
	}

	public int getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

	public String getOpeningDate() {
		return openingDate;
	}

	public void setOpeningDate(String openingDate) {
		this.openingDate = openingDate;
	}

	@Override
	public String toString() {
		return "Account [accountNo=" + accountNo + ", customer=" + customer + ", balance=" + balance + ", branch="
				+ branch + ", openingDate=" + openingDate + "]";
	}
}
