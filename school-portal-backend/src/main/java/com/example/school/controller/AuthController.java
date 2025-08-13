package com.example.school.controller;

import com.example.school.dto.LoginRequest;
import com.example.school.dto.LoginResponse;
import com.example.school.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
		LoginResponse response = authService.login(request);
		return ResponseEntity.ok(response);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	public Map<String, String> handleInvalidCredentials(IllegalArgumentException ex) {
		Map<String, String> error = new HashMap<>();
		error.put("error", ex.getMessage());
		return error;
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, String> handleValidation(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getFieldErrors().forEach(f -> errors.put(f.getField(), f.getDefaultMessage()));
		return errors;
	}
}