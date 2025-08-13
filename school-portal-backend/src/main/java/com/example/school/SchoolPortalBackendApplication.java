package com.example.school;

import com.example.school.model.User;
import com.example.school.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SchoolPortalBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(SchoolPortalBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner seedUsers(UserRepository userRepository) {
		return args -> {
			userRepository.findByEmail("admin@school.local").orElseGet(() -> {
				User admin = new User();
				admin.setEmail("admin@school.local");
				admin.setPassword("admin123");
				admin.setFullName("Admin User");
				admin.setRole("ADMIN");
				return userRepository.save(admin);
			});
		};
	}
}
