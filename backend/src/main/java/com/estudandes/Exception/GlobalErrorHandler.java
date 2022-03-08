package com.estudandes.Exception;


import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;

@RestControllerAdvice// ControllerAdvice
public class GlobalErrorHandler {


    @ExceptionHandler(NotValidStudentException.class)
    public ResponseEntity<ApiExceptionModel> notValidStudentException(NotValidStudentException e) {
        final HttpStatus httpStatus = HttpStatus.BAD_REQUEST;

        return ResponseEntity.status(httpStatus).body(new ApiExceptionModel(
                e.ErrorList().get(),
                ZonedDateTime.now(),
                httpStatus
        ));

    }

}
