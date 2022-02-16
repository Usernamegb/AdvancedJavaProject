package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.ScreenDao;

import com.cdac.entity.Screen;

@Service
public class ScreenServiceImpl implements ScreenService {
    @Autowired
    private ScreenDao ss;
	@Override
	public void addScreen(Screen screen) {
      ss.save(screen);
	}

}
