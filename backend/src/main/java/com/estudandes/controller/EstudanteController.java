package com.estudandes.controller;

import com.estudandes.Exception.NotValidStudentException;
import com.estudandes.model.Estudante;
import com.estudandes.service.EstudanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/estudante")
@CrossOrigin
public class EstudanteController {

@Autowired
EstudanteService estudanteService;

    @GetMapping
    public List<Estudante> getAllStudents() {
        return estudanteService.getAllStudants();
    }

    @GetMapping("/verifyEmail")
    public Boolean verifyEmail(@RequestParam("email") String email){
        return estudanteService.consultEmail(email);
    }

    @PostMapping
    public ResponseEntity<?> addStudent(@Valid @RequestBody Estudante estudante,
                                        Errors errors) throws NotValidStudentException{
        if (errors.hasErrors())
            throw new NotValidStudentException(errors);

        if(estudanteService.consultEmail(estudante.getEmail()))
           return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                   .body("Email Já associado a um Estudante");

        estudante.setId(UUID.randomUUID());
        estudanteService.addStudent(estudante);
       return ResponseEntity.status(HttpStatus.CREATED).body("estudante adicionado!");

   }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") UUID id){
       return estudanteService.deleteStudent(id)?
       ResponseEntity.status(HttpStatus.ACCEPTED).body("estudante eliminado")
    :  ResponseEntity.status(HttpStatus.NOT_FOUND).body("Estudante Inexistente");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable("id") UUID id,
                                           @Valid @RequestBody Estudante patch ){
        Estudante estudante=estudanteService.getStudentById(id);

        if (estudante==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Estudante inexistente");
        }
        if(estudanteService.patchStudent(estudante,patch))
        return  ResponseEntity.status(HttpStatus.ACCEPTED).body("Estudante actualizado com sucesso");

        return  ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("Nenhum campo foi actualizado");

    }
}
