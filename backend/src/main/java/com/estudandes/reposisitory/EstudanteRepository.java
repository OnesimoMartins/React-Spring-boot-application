package com.estudandes.reposisitory;

import com.estudandes.model.Estudante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EstudanteRepository extends JpaRepository<Estudante,UUID> {

    @Query(value = "select e.email from estudante e where e.email=:email",nativeQuery = true)
    public String ConsultEmail(@Param("email") String email);
}
