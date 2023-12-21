import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import * as LL from "./listaLivros"
import { LivroType } from "../../types/livroType";
import { Livro } from "../../components/livro";

export const ListaLivros = () => {
    const [livros, setLivros] = useState<LivroType[] | []>([]);

    async function fetchLivros() {
        const result = await fetch("http://localhost:8080/livros");
        const data = await result.json();
        setLivros(data);
    }

    useEffect(()=>{
        fetchLivros();
    },[])

    return(
        <LL.Container>
            <Header/>
            {livros.map((livro: LivroType)=>{
                return(
                    <Livro livro={livro}/>
                )
            })}
        </LL.Container>
    )
}