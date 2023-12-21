package com.desafio.backend.livros.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.backend.livros.model.Livro;
import com.desafio.backend.livros.repository.LivroRepository;





@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class LivroController {
    @Autowired LivroRepository livroRepository;

    @GetMapping("/livros")
    public ArrayList<Livro> buscarLivros() {
        return livroRepository.findAll();
    }

    @GetMapping("/:titulo/:autor")
    public Livro buscarLivro(@PathVariable String titulo, @PathVariable String autor) {
        return livroRepository.findByTituloAutor(titulo, autor);
    }
    
    @PostMapping("/cadastrarLivro")
    public void salvarLivro(@RequestBody Livro livro) {
        livroRepository.save(livro);
    }
    
    @PutMapping("/editarLivro")
    public void editarLivro(@RequestBody Livro livro) {
        //livroRepository.update(livro);
    }

    @DeleteMapping("/deletarLivro/:id")
    public void deletarLivro(@PathVariable Integer id){
        livroRepository.deleteById(id);
    }
}
