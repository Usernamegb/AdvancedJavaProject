package com.cdac.dto;

public class SeatDto {
          private int seatNo;
          private int screenNo;
          private int userId;
          private String status;
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public int getSeatNo() {
			return seatNo;
		}
		public void setSeatNo(int seatNo) {
			this.seatNo = seatNo;
		}
		public int getScreenNo() {
			return screenNo;
		}
		public void setScreenNo(int screenNo) {
			this.screenNo = screenNo;
		}
		public int getUserId() {
			return userId;
		}
		public void setUserId(int userId) {
			this.userId = userId;
		}
}
