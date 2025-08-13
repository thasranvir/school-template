package com.example.school.repository;

import com.example.school.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
	Optional<User> findByEmail(String email);
}