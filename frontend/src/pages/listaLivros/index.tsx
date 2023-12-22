import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Livro } from "../../components/livro";
import { ModalVisualizarLivro } from "../../components/modal_visualizar";
import { LivroType } from "../../types/livroType";
import * as LL from "./listaLivros";

export const ListaLivros = () => {
    const navigate = useNavigate();
    const defaultDataPublicacao = new Date();
    var idLivro = localStorage.getItem("id");
    const [aberto, setAberto] = useState(false);
    const [livros, setLivros] = useState<LivroType[] | []>([]);
    const [livro, setLivro] = useState<LivroType>({
        id: 0,
        titulo: "",
        autor: "",
        genero: "",
        sinopse: "",
        data_publicacao: defaultDataPublicacao,
        avaliacao: 0
    });

    async function fetchLivros() {
        try {
            const result = await fetch("http://localhost:8080/livros");
            const data = await result.json();
            setLivros(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchLivros();
    }, []);

    function abrirEditar(livro: LivroType) {
        localStorage.setItem("id", String(livro.id));
        navigate("/cadastroLivro");
    }

    function abrirVisualizar(livro: LivroType) {
        localStorage.setItem("id", String(livro.id));
        setLivro(livro);
        setAberto(true);
    }

    function excluir(){
        try {
            fetch(`http://localhost:8080/deletarLivro/${idLivro}`,{
                method: "DELETE"
            })
            .then(()=>{
                setAberto(false);
                navigate("/livros");
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LL.Container>
            <Header />
            {livros.length > 0 ? livros.map((livro: LivroType, index: number) => {
                return (
                    <Livro key={index} livro={livro} abrirVisualizar={() => abrirVisualizar(livro)} aberto={aberto} />
                )
            }) : (
                <h1 style={{ color: "red", backgroundColor: "white" }}>Ainda não existem livros cadastrados!</h1>
            )}
            {aberto ? <ModalVisualizarLivro onClose={() => setAberto(false)}  livro={livro} onClick={() => abrirEditar(livro)} onClickExcluir={excluir}/> : null}
        </LL.Container>
    )
}