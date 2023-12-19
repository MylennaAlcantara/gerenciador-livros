package com.desafio.backend.livros.model;

import java.util.Date;

public class Livro {
    private Integer id;
    private String titulo;
    private String autor;
    private String genero;
    private String sinopse;
    private Date data_publicacao;
    private Integer avaliacao;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public String getSinopse() {
        return sinopse;
    }
    public void setSinopse(String sinopse) {
        this.sinopse = sinopse;
    }
    public Date getData_publicacao() {
        return data_publicacao;
    }
    public void setData_publicacao(Date data_publicacao) {
        this.data_publicacao = data_publicacao;
    }
    public Integer getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(Integer avaliacao) {
        this.avaliacao = avaliacao;
    }


}
