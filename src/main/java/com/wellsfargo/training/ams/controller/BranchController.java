package com.wellsfargo.training.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.wellsfargo.training.ams.model.Branch;
import com.wellsfargo.training.ams.service.BranchService;

@RestController
public class BranchController {
	@Autowired
	private BranchService branchService;
	@PostMapping("/addBranch")
	public Branch addBranch(@RequestBody Branch branch){
		return branchService.saveBranch(branch);
	}
	@GetMapping("/getBranches")
	public List<Branch> getBranches(){
		return branchService.getBranches();
	}
	@GetMapping("/getBranchById/{id}")
	@ResponseBody
	public Branch getBranchById(@PathVariable int id){
		return branchService.getBranchById(id);
	}
	@DeleteMapping("/deleteBranch/{id}")
	@ResponseBody
	public String deleteBranch(@PathVariable int id){
		return branchService.deleteBranch(id);
	}
}
