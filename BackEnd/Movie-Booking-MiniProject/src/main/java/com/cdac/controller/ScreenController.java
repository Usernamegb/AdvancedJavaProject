package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Movies;
import com.cdac.entity.Screen;
import com.cdac.entity.User;
import com.cdac.service.MovieService;
import com.cdac.service.ScreenService;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class ScreenController {

	@Autowired
	private ScreenService ss;
	
	
	@PostMapping("/Screen")
	public String addScreenRecord(@RequestBody Screen screen) {
		ss.addScreen(screen);
		return "user registered successfully";
	}
	
	
	
}
