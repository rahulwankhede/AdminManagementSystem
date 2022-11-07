package com.wellsfargo.training.ams.model;

public class FetchObjects {
	int customer_id;
	int branch_id;
	double balance;
	String openingDate;
	
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getOpeningDate() {
		return openingDate;
	}
	public void setOpeningDate(String openingDate) {
		this.openingDate = openingDate;
	}
	public int getBranch_id() {
		return branch_id;
	}
	public void setBranch_id(int branch_id) {
		this.branch_id = branch_id;
	}
	@Override
	public String toString() {
		return "FetchObjects [customer_id=" + customer_id + ", branch_id=" + branch_id + ", balance=" + balance
				+ ", openingDate=" + openingDate + "]";
	}
}
