import { useState } from "react";
import { Header } from "../../components/header";
import { LivroType } from "../../types/livroType";
import * as CL from "./cadastroLivro";

export const CadastroLivro = () => {
    const [livro, setLivro] = useState<LivroType>({
        id: 0,
        titulo: "",
        autor: "",
        genero: "",
        sinopse: "",
        data_publicacao: new Date(""),
        avaliacao: 0,
        excluido: false,
        data_excluido: new Date("")
    });

    async function salvar() {
        fetch("http://localhost:8080/cadastrarLivro", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        })
    }
    return (
        <CL.Container>
            <Header />
            <div style={{width: "80%"}}>
                <h1>Cadastro de Livro</h1>
                <form action="post">
                    <div className="formulario">
                        <div className="labels">
                            <label>Titulo:</label>
                            <label>Autor:</label>
                            <label>Genêro:</label>
                            <label>Sinopse:</label>
                            <label>Data Publicação:</label>
                            <label>Avaliação:</label>
                        </div>
                        <div className="campos">
                            <input value={livro.titulo} onChange={(e)=> setLivro({...livro, titulo: e.target.value})}/>
                            <input  value={livro.autor} onChange={(e)=> setLivro({...livro, autor: e.target.value})}/>
                            <input  value={livro.genero} onChange={(e)=> setLivro({...livro, genero: e.target.value})}/>
                            <textarea  value={livro.sinopse} onChange={(e)=> setLivro({...livro, sinopse: e.target.value})}/>
                            <input type="date" value={String(livro.data_publicacao)} onChange={(e)=> setLivro({...livro, data_publicacao: new Date(e.target.value)})}/>
                            <input type="number"  value={livro.avaliacao} onChange={(e)=> setLivro({...livro, avaliacao: Number(e.target.value)})}/>
                        </div>
                    </div>
                    <button type="submit" onClick={salvar}>Salvar</button>
                </form>
            </div>
        </CL.Container>
    )
}