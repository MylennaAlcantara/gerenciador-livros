package com.desafio.backend.livros.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.desafio.backend.livros.model.Livro;


public interface LivroRepository extends JpaRepository<Livro, Integer> {
    public ArrayList<Livro> findAll();

    @Query(value = "SELECT * FROM livro WHERE titulo = :titulo AND autor = :autor", nativeQuery = true)
    public Livro findByTituloAutor(String titulo, String autor);

    @Query(value = "SELECT * FROM livro WHERE id = :id", nativeQuery = true)
    public Livro findLivroById(Integer id);

    @Query(value = "SELECT * FROM livro ORDER BY id DESC limit 5", nativeQuery = true)
    public ArrayList<Livro> findLivrosRecentes();
}
