package com.estudandes.model;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum Sexo {
        MASCULINO,
        FEMININO

    }

