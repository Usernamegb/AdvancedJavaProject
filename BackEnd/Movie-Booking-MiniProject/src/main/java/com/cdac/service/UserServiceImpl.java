package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.UserDao;
import com.cdac.dto.UserDto;
import com.cdac.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public void addUser(User user) {
		userDao.save(user);
		
		}
	@Override
	public List<User> findByEmail(String email) {
		return userDao.findByEmail(email);
	}


	@Override
	public UserDto isExist(String username,String password) {
		
		if(userDao.findByUsernameAndPassword(username,password).size()==1)
		{
			UserDto userDto=new UserDto();
			userDto.setExist(true);
			userDto.setMessage("Login Successfully");
			userDto.setUser(userDao.findByUsernameAndPassword(username,password).get(0));
			return userDto;
		}
		else {
			UserDto userDto=new UserDto();
			userDto.setExist(false);
			userDto.setMessage("Sorry, You need to Register!!!!");
		    return userDto;
		}
	}
//	@Override
//	public User findById(int userId) {
//		  User u=(User)userDao.findById(userId);
//		  return u;
//	}


//	public UserDto updatePassword(String email, String username) {
//		if(userDao.findByEmailAndUsername(email, username).size()==1)
//		{
//			UserDto userDto=new UserDto();
//			userDto.setExist(false);
//			userDto.setMessage("Login Successfully");
//			userDto.setUser(userDao.findByEmailAndUsername(email, username).get(0));
//			return userDto;
//		}
//		else {
//			UserDto userDto=new UserDto();
//			userDto.setExist(false);
//			userDto.setMessage("Sorry, You need to Register!!!!");
//		    return userDto;
//		}
//		
//	}
	

}
