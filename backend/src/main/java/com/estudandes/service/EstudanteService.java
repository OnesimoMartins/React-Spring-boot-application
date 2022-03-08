package com.estudandes.service;

import com.estudandes.model.Estudante;
import com.estudandes.reposisitory.EstudanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.constraints.Email;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class EstudanteService {
    @Autowired
    EstudanteRepository estudanteRepository;

  public List<Estudante> getAllStudants(){
return estudanteRepository
        .findAll();

}

    public void addStudent( Estudante estudante){
        System.out.println("student added:"+estudanteRepository.save(estudante).toString());
        }

        public Boolean consultEmail(@Email String email){
        if (estudanteRepository.ConsultEmail(email) != null)
            return true;
        else
            return false;
    }

    public Boolean deleteStudent(UUID id){
        if (estudanteRepository.getById(id) == null)
            return false;
        else
      estudanteRepository.delete(estudanteRepository.getById(id));
        return true;
    }
    public Estudante getStudentById(UUID id){
        if (estudanteRepository.findById(id).isPresent())
            return estudanteRepository.getById(id);
        return  null;
    }

    public Boolean patchStudent(Estudante estudante, Estudante patch){
      Boolean studentHasBeenUpdated=false;

        if(!estudante.getEmail().equals(patch.getEmail())){
            estudante.setEmail(patch.getEmail());
            studentHasBeenUpdated=true;
        }

        if (!estudante.getPrimeiro_nome().equals(patch.getPrimeiro_nome())){
            estudante.setPrimeiro_nome(patch.getPrimeiro_nome());
            studentHasBeenUpdated=true;
        }

        if(!estudante.getUltimo_nome().equals(patch.getUltimo_nome())){
            estudante.setUltimo_nome(patch.getUltimo_nome());
            studentHasBeenUpdated=true;}

        if (!estudante.getSexo().equals(patch.getSexo())){
            estudante.setSexo(patch.getSexo());
            studentHasBeenUpdated=true;}

        System.out.println("estudante actualizado "+estudanteRepository.save(estudante).toString());

        return studentHasBeenUpdated;
    }
}
