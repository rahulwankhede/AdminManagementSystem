package com.wellsfargo.training.ams.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ams.model.Branch;

public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
