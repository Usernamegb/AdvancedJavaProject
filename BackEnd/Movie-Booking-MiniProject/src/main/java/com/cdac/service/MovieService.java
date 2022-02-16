package com.cdac.service;

import java.util.List;

import com.cdac.dto.MovieDto;
import com.cdac.entity.Movies;

public interface MovieService {
    public void addMovie(MovieDto movie);
    public List<Movies> onGoing();
    public void deleteMovie(Movies movie);
    public List<Movies> getListOfMovies();

}
