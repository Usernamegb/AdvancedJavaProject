package com.cdac.dto;

import com.cdac.entity.Movies;

public class MovieDto {
	   private int screenNo;
	   private Movies movie;
       public int getScreenNo() {
		return screenNo;
	}
	public void setScreenNo(int screenNo) {
		this.screenNo = screenNo;
	}
	public Movies getMovie() {
		return movie;
	}
	public void setMovie(Movies movie) {
		this.movie = movie;
	}
	
}
