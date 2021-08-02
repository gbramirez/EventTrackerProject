package com.skilldistillery.pregnancyapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PregnancyTrackerApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(PregnancyTrackerApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(PregnancyTrackerApplication.class, args);
	}

}
