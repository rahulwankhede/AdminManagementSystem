package com.wellsfargo.training.ams.model;

import java.util.List;

import javax.persistence.CascadeType;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Branch")
public class Branch {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "branch_generator")
	private int id;
	private String branchName;
	private String branchAddress;
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "branch", fetch = FetchType.LAZY)
	private List<Account> accounts;
	public Branch() {
	}
	
	public Branch(int id, String branchName, String branchAddress, List<Account> accounts) {
		this.id = id;
		this.branchName = branchName;
		this.branchAddress = branchAddress;
		this.accounts = accounts;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getBranchAddress() {
		return branchAddress;
	}
	public void setBranchAddress(String branchAddress) {
		this.branchAddress = branchAddress;
	}
	public List<Account> getAccounts() {
		return accounts;
	}
	@JsonIgnore
	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}
}
