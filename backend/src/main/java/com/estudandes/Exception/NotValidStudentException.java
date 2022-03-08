package com.estudandes.Exception;
import org.springframework.validation.Errors;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class NotValidStudentException extends Throwable {
    //class responsible for throw errors of submitted student
   private Errors errors;

    public NotValidStudentException(String message) {
        super(message);
       // this.errors.
    }

    public NotValidStudentException(Errors errors) {
        this.errors=errors;
    }

    public Optional<List<String>> ErrorList(){
        //this method returns a list of all errors of a submitted student.
        if (errors.hasErrors()) {
            List<String> err= new ArrayList<>();
            errors.getAllErrors().forEach(e->err.add(e.getDefaultMessage()));
            return Optional.of(err);
          }

        else  return Optional.empty();
    }

}


