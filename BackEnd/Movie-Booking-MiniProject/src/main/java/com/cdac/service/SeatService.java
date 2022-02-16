package com.cdac.service;


import java.util.List;

import com.cdac.entity.Seat;

public interface SeatService {
            public List<Seat> getAllSeats();
            public Seat bookSeat(Seat s);
           
}
