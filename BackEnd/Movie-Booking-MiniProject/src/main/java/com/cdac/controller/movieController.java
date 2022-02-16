package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.MovieDto;
import com.cdac.entity.Movies;
import com.cdac.service.MovieService;
import com.cdac.service.MovieServiceImpl;

@RestController
@CrossOrigin
public class movieController {
	@Autowired
	private MovieService movieServ;
	
	@PostMapping("/movie")
	public String addMovieRecord(@RequestBody MovieDto movieDto) {
		movieServ.addMovie(movieDto);
		return "movie added successfully";
	}
	

	@PostMapping("/movie-list")
	public List<Movies> getMoviesList(){
	    return movieServ.getListOfMovies();
	}
    @PostMapping("/get-Ongoing-movies")
    public List<Movies> getOnGoingMovie(){
    	 
    	return movieServ.onGoing();
    }
	
	
}

//







