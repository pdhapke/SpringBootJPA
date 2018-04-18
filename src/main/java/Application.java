package main.java;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	
	public static void main(String[] args) {
			SpringApplication.run(Application.class, args);
	}



	@Bean
	public CommandLineRunner commandLineRunner() {
		return args -> {

			System.out.println("Hello World!");

		};
	}
	 @Bean
	    public CommandLineRunner commandLineRunner2() {
	        return args -> {

	            System.out.println("It appears this works as well!");

	            };
	    }

}


