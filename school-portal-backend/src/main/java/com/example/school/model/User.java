package com.example.school.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "users")
public class User {
	@Id
	private String id;
	private String email;
	private String password;
	private String fullName;
	private String role;
}