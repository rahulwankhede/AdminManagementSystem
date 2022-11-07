package com.wellsfargo.training.ams.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ams.model.Branch;
import com.wellsfargo.training.ams.repository.BranchRepository;

@Service
public class BranchService {	
	@Autowired
	private BranchRepository branchRepository;
	
	public Branch saveBranch(Branch branch) {
		return branchRepository.save(branch);
	}
	
	public List<Branch> getBranches(){
		return branchRepository.findAll();
	}
	
	public Branch getBranchById(int id){
		return branchRepository.findById(id).orElse(null);
	}
	public String deleteBranch(int id){
		branchRepository.deleteById(id);
		return "Branch with id: "+id+" deleted.";
	}
}
