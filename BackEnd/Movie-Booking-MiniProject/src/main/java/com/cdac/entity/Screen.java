package com.cdac.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
public class Screen {
	@Id
	private int screenNo;
	private int capacity=50;
	@OneToOne
	@JoinColumn(name= "movie_id")
	@JsonIgnore
	private Movies movie;
//	@OneToOne(mappedBy = "seat")
//	private Seat seat;
	@Override
	public String toString() {
		return "Screen [screenNo=" + screenNo + ", capacity=" + capacity + ", movie=" + movie + "]";
	}
	public int getScreenNo() {
		return screenNo;
	}
	public void setScreenNo(int screenNo) {
		this.screenNo = screenNo;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public Movies getMovie() {
		return movie;
	}
	public void setMovie(Movies movie) {
		this.movie = movie;
	}
}
