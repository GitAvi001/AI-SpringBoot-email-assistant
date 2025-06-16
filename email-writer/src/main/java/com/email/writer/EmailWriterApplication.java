package com.email.writer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailWriterApplication {

	public static void main(String[] args) {

		System.out.println("Starting Email Writer Application...");
		SpringApplication.run(EmailWriterApplication.class, args);
	}

}
