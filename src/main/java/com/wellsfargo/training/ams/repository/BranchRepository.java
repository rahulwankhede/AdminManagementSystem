package com.wellsfargo.training.ams.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ams.model.Branch;
/***
 *A repository class for Branch that extends that JPA Repository interface which provides a set of
 *methods that can be used to interact with the database.
 */
public interface BranchRepository extends JpaRepository<Branch, Integer> {
}
