package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.MovieDao;
import com.cdac.dao.ScreenDao;
import com.cdac.dto.MovieDto;
import com.cdac.entity.Movies;
import com.cdac.entity.Screen;

@Service
public class MovieServiceImpl implements MovieService{
    
	@Autowired
	private MovieDao movieDao;
	
	@Autowired
	private ScreenService screenServ;
	@Override
	public void addMovie(MovieDto movieDto) {  
		movieDao.save(movieDto.getMovie());
		Screen s=new Screen();
		s.setScreenNo(movieDto.getScreenNo());
		s.setMovie(movieDto.getMovie());
		screenServ.addScreen(s);
	}
	@Override
	public void deleteMovie(Movies movie) {
		Movies m=movieDao.getById(movie.getId());
		movieDao.deleteById(movie.getId());
		
	}
	
	@Override
	public List<Movies> getListOfMovies() {
		
		return movieDao.findAll();
	}
	@Override
	public List<Movies> onGoing() {
		
		return movieDao.allOngoingMovies();
	}
	

}
