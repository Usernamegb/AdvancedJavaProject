package com.cdac.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.SeatDto;
import com.cdac.entity.Screen;
import com.cdac.entity.Seat;
import com.cdac.entity.User;
import com.cdac.service.SeatService;

@RestController
@CrossOrigin
public class SeatController {
	@Autowired
	private SeatService seatServ;
	@PostMapping("/Show-Seats")
	public List<Seat> getAllSeats() {
      return seatServ.getAllSeats();
	}
	public List<Seat> getAllSeatsBasedOnDateAndTime(){
		return null;
		
	}
	@PostMapping("/Book-Seat")
	public Seat bookingSeat(@RequestBody SeatDto s) {
	    User u=new User();
	    Screen screen=new Screen();
	    Seat seat=new Seat();
	    seat.setSeatNo(s.getSeatNo());
	    u.setId(s.getUserId());
	    screen.setScreenNo(s.getScreenNo());
	    seat.setScreen(screen);
	    seat.setUser(u);
	    seat.setStatus(s.getStatus());
	
	    return seatServ.bookSeat(seat);		
	}
}

