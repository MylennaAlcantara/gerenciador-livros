import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { LivroType } from "../../types/livroType";
import * as CL from "./cadastroLivro";

export const CadastroLivro = () => {
    var idLivro = localStorage.getItem("id");
    const defaultDataPublicacao = new Date();
    var editando = idLivro != null ? true : false;

    const navigate = useNavigate();
    const [livro, setLivro] = useState<LivroType>({
        id: 0,
        titulo: "",
        autor: "",
        genero: "",
        sinopse: "",
        data_publicacao: defaultDataPublicacao,
        avaliacao: 0,
    });

    useEffect(() => {
        async function fetchLivros() {
            if (idLivro !== null) {
                try {
                    const result = await fetch(`http://localhost:8080/livro/${idLivro}`);
                    const data = await result.json();
                    setLivro({ ...data, data_publicacao: new Date(data.data_publicacao) })
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchLivros();
    }, [idLivro])

    function salvar() {
        if (livro.autor && livro.avaliacao && livro.data_publicacao && livro.genero && livro.sinopse && livro.titulo) {
            if (livro.avaliacao <= 5) {
                try {
                    fetch("http://localhost:8080/cadastrarLivro", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(livro)
                    })
                        .then(() => {
                            alert("Salvo com sucesso!");
                            navigate("/livros");
                        })
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert('Escolha entre 0 e 5 para avaliar!')
            }
        } else {
            alert('Preencha todos os campos!')
        }
    }

    function atualizar() {
        if (livro.autor && livro.avaliacao && livro.data_publicacao && livro.genero && livro.sinopse && livro.titulo) {
            if (livro.avaliacao <= 5 && livro.avaliacao >= 0) {
                try {
                    fetch(`http://localhost:8080/editarLivro/${idLivro}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(livro),
                    })
                        .then(() => {
                            alert("Atualizado com sucesso!");
                            navigate("/");
                        })
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert('Escolha entre 0 e 5 para avaliar!')
            }
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <CL.Container>
            <Header />
            <div className="conteudo">
                <h1>Cadastro de Livro</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="formulario">
                        <div className="labels">
                            <label>Título:</label>
                            <label>Autor:</label>
                            <label>Gênero:</label>
                            <label>Sinopse:</label>
                            <label>Data Publicação:</label>
                            <label>Avaliação:</label>
                        </div>
                        <div className="campos">
                            <input value={livro.titulo} onChange={(e) => setLivro({ ...livro, titulo: e.target.value })} />
                            <input value={livro.autor} onChange={(e) => setLivro({ ...livro, autor: e.target.value })} />
                            <input value={livro.genero} onChange={(e) => setLivro({ ...livro, genero: e.target.value })} />
                            <textarea maxLength={1000} value={livro.sinopse} onChange={(e) => setLivro({ ...livro, sinopse: e.target.value })} />
                            <input
                                type="date"
                                value={livro.data_publicacao instanceof Date ? livro.data_publicacao.toISOString().split('T')[0] : ""}
                                onChange={(e) => {
                                    const selectedDate = new Date(e.target.value);
                                    setLivro({
                                        ...livro,
                                        data_publicacao: isNaN(selectedDate.getTime()) ? defaultDataPublicacao : selectedDate
                                    });
                                }}
                            />
                            <input type="number" max={5} min={0} value={livro.avaliacao} onChange={(e) => setLivro({ ...livro, avaliacao: Number(e.target.value) })} />
                        </div>
                    </div>
                    <button className="button-salvar" type="submit" onClick={editando ? atualizar : salvar}>Salvar</button>
                </form>
            </div>
        </CL.Container>
    )
}