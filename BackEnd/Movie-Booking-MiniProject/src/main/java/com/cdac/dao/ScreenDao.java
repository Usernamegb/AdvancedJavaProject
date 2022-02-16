package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Screen;

@Repository
public interface ScreenDao extends JpaRepository<Screen,Integer> {

}
