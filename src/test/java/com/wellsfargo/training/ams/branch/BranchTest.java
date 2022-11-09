package com.wellsfargo.training.ams.branch;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.wellsfargo.training.ams.model.Branch;
import com.wellsfargo.training.ams.repository.BranchRepository;

@SpringBootTest
public class BranchTest {
	@Autowired
	BranchRepository branchRepository;
	
	@Test
	public void addBranchTest(){
		Branch branch=new Branch();
		branch.setBranchName("branch-1");
		branch.setBranchAddress("street-1,Bangalore");
		Assertions.assertNotNull(branchRepository.save(branch));
	}
	
	@Test
	public void getBranchesTest(){
		List<Branch> branchList=branchRepository.findAll();
		assertThat(branchList).size().isGreaterThan(0);
	}
	
	@Test
	public void getBranchByIdTest(){
		List<Branch> branchList=branchRepository.findAll();
		int branchId=branchList.get(0).getId();
		assertThat(branchRepository.existsById(branchId)).isTrue();
	}
	
	@Test
	public void deleteBranchTest(){
		List<Branch> branchList=branchRepository.findAll();
		int branchId=branchList.get(0).getId();
		branchRepository.deleteById(branchId);
		assertThat(branchRepository.existsById(branchId)).isFalse();
	}
}
