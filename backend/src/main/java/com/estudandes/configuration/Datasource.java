package com.estudandes.configuration;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.jdbc.metadata.HikariDataSourcePoolMetadata;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariDataSource;

import javax.activation.DataSource;
import javax.xml.crypto.Data;
@Configuration
public class Datasource {

    @Bean
   // @ConfigurationProperties("spring.datasource.")
    public HikariDataSource hikariDataSource(){
        return DataSourceBuilder.create().username("postgres")
                .password("9251").url("jdbc:postgresql://localhost:5432/estudantes")
                .type(HikariDataSource.class)

        .build();
    }

}
