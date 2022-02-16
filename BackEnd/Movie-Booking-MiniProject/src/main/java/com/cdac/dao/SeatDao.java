package com.cdac.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Seat;

@Repository
public interface SeatDao extends JpaRepository<Seat, Integer> {
           
}

