package com.cdac.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	public List<User> findByUsernameAndPassword(String username, String password);
	
	public List<User> findByEmailAndUsername(String email, String username);

	public List<User> findByEmail(String email);

}
