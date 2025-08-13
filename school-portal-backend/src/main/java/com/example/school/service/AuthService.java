package com.example.school.service;

import com.example.school.dto.LoginRequest;
import com.example.school.dto.LoginResponse;
import com.example.school.event.LoginEvent;
import com.example.school.model.User;
import com.example.school.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class AuthService {
	private final UserRepository userRepository;
	private final KafkaProducerService kafkaProducerService;

	public LoginResponse login(LoginRequest request) {
		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));
		if (!user.getPassword().equals(request.getPassword())) {
			throw new IllegalArgumentException("Invalid credentials");
		}

		kafkaProducerService.sendLoginEvent(new LoginEvent(user.getEmail(), Instant.now().toString()));

		String fakeToken = "token-" + user.getId();
		return new LoginResponse(fakeToken, user.getFullName(), user.getRole());
	}
}