package com.example.school.event;

public class LoginEvent {
	private String email;
	private String timestamp;

	public LoginEvent() {}

	public LoginEvent(String email, String timestamp) {
		this.email = email;
		this.timestamp = timestamp;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
}