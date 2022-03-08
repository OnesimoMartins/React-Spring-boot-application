package com.estudandes.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.Pattern;

import java.lang.annotation.*;

@Documented
@Pattern(regexp = "(MASCULINO|FEMININO)", message = "O gênero deve ser MASCULINO ou FEMININO")
@Constraint(validatedBy ={} )
@Target({ElementType.METHOD,ElementType.FIELD,ElementType.PARAMETER,ElementType.ANNOTATION_TYPE,ElementType.CONSTRUCTOR,ElementType.TYPE_USE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Gender {

    String message() default "O gênero deve ser MASCULINO ou FEMININO";

    Class<?>[] groups() default{};

    Class<? extends Payload>[] payload() default{};
}
