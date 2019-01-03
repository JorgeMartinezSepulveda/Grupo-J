package com.example.dagorDagorath;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class DagorDagorathApplication implements WebSocketConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(DagorDagorathApplication.class, args);
	}

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) 
	{
		registry.addHandler(createOnlineHandler(), "/dagor").setAllowedOrigins("*");
	}

	@Bean
	public OnlineHandler createOnlineHandler() 
	{
		return new OnlineHandler();
	}
}
