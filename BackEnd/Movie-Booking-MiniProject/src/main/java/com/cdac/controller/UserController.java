package com.cdac.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.UserDto;
import com.cdac.entity.Movies;
import com.cdac.entity.User;
import com.cdac.service.MovieService;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userServ;
	
	
	@PostMapping("/register")
	public String addUserRecord(@RequestBody User user) {
		userServ.addUser(user);
		return "user registered successfully";
	}
	@PostMapping("/Login")
	public UserDto isExistingUser(@RequestBody User u) {
		UserDto userDto=userServ.isExist(u.getUsername(), u.getPassword());
		return userDto;	
		
	}
	
	@PostMapping("/findbyemail")
	public List<User> findByEmail(@RequestBody User user) {
		return userServ.findByEmail(user.getEmail());
	}

//	@PostMapping("//findById")
//	public Optional<User> findUserById(@RequestBody int Id) {
//		return userServ.findById(Id);
//	}
//	@PostMapping("/forgotPassword")
//	public String passwordChange(@RequestBody User u)
//	{
//		if(userServ.updatePassword(u.getEmail(), u.getUsername())!=null)
//		{
//			userServ.updatePassword(u.getEmail(), u.getUsername()).setPassword("Shivputra");
//		}
//		return "User Doesnot Exist";
//	}
	
	
}
