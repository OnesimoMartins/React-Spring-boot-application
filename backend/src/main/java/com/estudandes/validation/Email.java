package com.estudandes.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.Pattern;
import java.lang.annotation.*;

//@javax.validation.constraints.Email(message = "Email inválido")
@Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Email inválido")
@Documented
@Constraint(validatedBy = {} )
@Target({ElementType.METHOD,ElementType.FIELD,ElementType.PARAMETER,ElementType.ANNOTATION_TYPE,ElementType.CONSTRUCTOR,ElementType.TYPE_USE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Email {

    String message() default "Email inválido";

    Class<?>[] groups() default{};

    Class<? extends Payload>[] payload() default{};

}
