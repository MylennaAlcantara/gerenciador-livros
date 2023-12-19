package com.desafio.backend.livros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafio.backend.livros.model.Livro;
import java.util.List;


public interface LivroRepository extends JpaRepository<Livro, Integer> {
    public ArrayList<Livro> findAll();

    public Livro findById(Integer id);

    public void save();
}
