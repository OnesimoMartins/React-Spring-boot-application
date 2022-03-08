create table if not exists estudante(
student_id UUID primary key not null,
primeiro_nome varchar (50) not null,
ultimo_nome varchar (50) not null,
email varchar (50) not null unique,
        sexo varchar(10) not null check(
sexo='MASCULINO' or sexo='FEMININO'
)
);