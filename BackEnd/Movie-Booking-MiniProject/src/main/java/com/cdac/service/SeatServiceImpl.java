package com.cdac.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.ScreenDao;
import com.cdac.dao.SeatDao;
import com.cdac.entity.Seat;


@Service
public class SeatServiceImpl implements SeatService {
	  @Autowired
	  private SeatDao seatDao;

	@Override
	public List<Seat> getAllSeats() {
      return seatDao.findAll();
	}

	@Override
	public Seat bookSeat(Seat s) {
		
	     return seatDao.save(s);
	}

	
	  
	  
}

