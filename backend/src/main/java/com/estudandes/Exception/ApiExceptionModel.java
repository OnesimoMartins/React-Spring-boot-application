package com.estudandes.Exception;

import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;
import java.util.List;

public class ApiExceptionModel {
 private final List<String> messages;
 private final ZonedDateTime dateTime;
 private  final HttpStatus httpStatus;

    public ApiExceptionModel(List<String> messages, ZonedDateTime zonedDateTime, HttpStatus httpStatus) {
        this.messages = messages;
        this.dateTime = zonedDateTime;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public List<String> getMessages() {
        return messages;
    }

    public ZonedDateTime getZonedDateTime() {
        return dateTime;
    }

}
