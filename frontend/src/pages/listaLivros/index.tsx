import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Livro } from "../../components/livro";
import { LivroType } from "../../types/livroType";
import * as LL from "./listaLivros";

export const ListaLivros = () => {
    const [livros, setLivros] = useState<LivroType[] | []>([]);

    async function fetchLivros() {
        try {
            const result = await fetch("http://localhost:8080/livros");
            const data = await result.json();
            setLivros(data);
        } catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchLivros();
    },[]);

    return(
        <LL.Container>
            <Header/>
            {livros.length < 0 ? livros.map((livro: LivroType, index: number)=>{
                return(
                    <Livro key={index} livro={livro}/>
                )
            }) : (
                <h1 style={{color: "red"}}>Ainda não existem livros cadastrados!</h1>
            )}
        </LL.Container>
    )
}