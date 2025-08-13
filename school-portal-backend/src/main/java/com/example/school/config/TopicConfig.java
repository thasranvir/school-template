package com.example.school.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class TopicConfig {
	public static final String LOGIN_TOPIC = "user.login.events";

	@Bean
	public NewTopic loginTopic() {
		return TopicBuilder.name(LOGIN_TOPIC).partitions(1).replicas(1).build();
	}
}