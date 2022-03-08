package com.estudandes.model;


import com.estudandes.validation.Email;
import com.estudandes.validation.Gender;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.util.UUID;


@Entity
@Table(name = "estudante")
public final class Estudante  {

    @Id
    @Column(name = "student_id")
    private  UUID id;

    
    @JsonProperty("primeiro_nome")
    @Size(min = 3,max = 10,message = "o nome deve estar entre 3 a 10 caracteres")
    @NotBlank
    private  String primeiro_nome;

    @JsonProperty("ultimo_nome")
    @Size(min = 3,max = 10,message = "o sobrenome deve estar entre 3 a 10 caracteres")
    @NotBlank
    private  String ultimo_nome;

    @JsonProperty("email")
    @Email
    private  String email;
    
    @JsonProperty("sexo")
    @Gender
    private  String sexo;


    public Estudante(){}


    public void setId(UUID id) {
        this.id = id;
    }

    public String getPrimeiro_nome(){return primeiro_nome;}

    public String getSexo() {
        return sexo;
    }

    public String getUltimo_nome() {return ultimo_nome;}

    public String getEmail() {
        return email;
    }

    public UUID getId() {
        return id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPrimeiro_nome(String primeiro_nome) {
        this.primeiro_nome = primeiro_nome;
    }

    public void setUltimo_nome(String ultimo_nome) {
        this.ultimo_nome = ultimo_nome;
    }


    public void setSexo(String sexo) {
        this.sexo =sexo.toUpperCase();
    }

    @Override
    public String toString() {
        return "Estudante{" +
                "id=" + id +
                ", primeiro_nome='" + primeiro_nome + '\'' +
                ", ultimo_nome='" + ultimo_nome + '\'' +
                ", email='" + email + '\'' +
                ", sexo=" + sexo +
                '}';
    }
}
