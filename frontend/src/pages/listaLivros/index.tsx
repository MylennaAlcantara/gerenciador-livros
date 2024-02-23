import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Livro } from "../../components/livro";
import { ModalVisualizarLivro } from "../../components/modal_visualizar";
import { LivroType } from "../../types/livroType";
import * as LL from "./listaLivros";

export const ListaLivros = () => {
    const navigate = useNavigate();
    const defaultDataPublicacao = new Date();
    const carrossel = useRef<HTMLDivElement>(null);
    var idLivro = localStorage.getItem("id");
    const [aberto, setAberto] = useState(false);
    const [livros, setLivros] = useState<LivroType[] | []>([]);
    const [livrosRecentes, setLivrosRecentes] = useState<LivroType[] | []>([]);
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

    async function fetchLivrosRecentes() {
        try {
            const result = await fetch("http://localhost:8080/livros/livrosRecentes");
            const data = await result.json();
            setLivrosRecentes(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchLivros();
        fetchLivrosRecentes();
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
                navigate("/");
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }

    function handleLeftClick(e: any){
        e.preventDefault();
        if(carrossel.current){
            carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
        }
    }

    function handleRightClick(e: any){
        e.preventDefault();
        if(carrossel.current){
            carrossel.current.scrollLeft += carrossel.current.offsetWidth;
        }
    }

    return (
        <LL.Container>
            <Header />
            {/*livrosRecentes.length > 0 && (
                <>
                <LL.Carrossel ref={carrossel}>
                    {livrosRecentes.length > 0 ? livrosRecentes.map((livro: LivroType, index: number)=>{
                        return(
                            <Livro style={{width: "200px", height: "200px"}} key={index} livro={livro} abrirVisualizar={() => abrirVisualizar(livro)} onClickEditar={()=> abrirEditar(livro)} onClickExcluir={excluir} aberto={aberto} />
                        )
                    }): null}
                </LL.Carrossel>
                <div className="buttons">
                    <button onClick={handleLeftClick}><img alt="Seta Esquerda" src=""/></button>
                    <button onClick={handleRightClick}><img alt="Seta Direita" src="" /></button>
                </div>
                </>
                )*/}
            
            {livros.length > 0 ? livros.map((livro: LivroType, index: number) => {
                return (
                    <Livro style={{width: "60%"}} key={index} livro={livro} abrirVisualizar={() => abrirVisualizar(livro)} onClickEditar={()=> abrirEditar(livro)} onClickExcluir={excluir} aberto={aberto} />
                )
            }) : (
                <h1 style={{ color: "#fd6162", backgroundColor: "white" }}>Ainda não existem livros cadastrados!</h1>
            )}
            {aberto ? <ModalVisualizarLivro onClose={() => setAberto(false)}  livro={livro} onClick={() => abrirEditar(livro)} onClickExcluir={excluir}/> : null}
        </LL.Container>
    )
}