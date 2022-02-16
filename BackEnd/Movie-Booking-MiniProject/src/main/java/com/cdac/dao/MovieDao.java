package com.cdac.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Movies;

@Repository
public interface MovieDao extends JpaRepository<Movies, Integer> {

	@Query(value = "select * from movies inner join screen on movies.id=screen.movie_id where screen.screen_no between 1 and 4; ",nativeQuery=true)
    public List<Movies> allOngoingMovies();
}

//select * from screen inner join movies on movies.id=screen.movie_id where movies.id=4;
//select m from Movies m join Screen s on m.id = s.movie where s.screenNo =:n

//"SELECT u.classId, u.userName, p.fullName FROM StdUser u, StdProfile p WHERE u.classId=p.proId"
//
//
//@Query("select r from Request r where email=:e and status=:s")
//public List<Request> viewDonations(@Param("e") String email,@Param("s") boolean status);

