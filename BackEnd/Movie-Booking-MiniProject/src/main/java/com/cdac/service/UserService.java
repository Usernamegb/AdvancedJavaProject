package com.cdac.service;

import java.util.List;
import java.util.Optional;

import com.cdac.dto.UserDto;
import com.cdac.entity.User;

public interface UserService {

	
	public void addUser(User user);
	
	public UserDto isExist(String username, String password);
	
//	public UserDto updatePassword(String email, String username);
	
	public List<User> findByEmail(String email);
	
	
	
		
}
