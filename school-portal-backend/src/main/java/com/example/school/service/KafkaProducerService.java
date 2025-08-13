package com.example.school.service;

import com.example.school.event.LoginEvent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import static com.example.school.config.TopicConfig.LOGIN_TOPIC;

@Service
@RequiredArgsConstructor
public class KafkaProducerService {
	private static final Logger log = LoggerFactory.getLogger(KafkaProducerService.class);

	private final KafkaTemplate<String, String> kafkaTemplate;
	private final ObjectMapper objectMapper;

	public void sendLoginEvent(LoginEvent event) {
		try {
			String payload = objectMapper.writeValueAsString(event);
			kafkaTemplate.send(LOGIN_TOPIC, event.getEmail(), payload);
			log.info("Published login event for {}", event.getEmail());
		} catch (JsonProcessingException e) {
			throw new RuntimeException("Failed to serialize login event", e);
		}
	}
}