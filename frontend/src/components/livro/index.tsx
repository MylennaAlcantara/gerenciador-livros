import { LivroType } from "../../types/livroType";
import * as L from "./livro";

export const Livro = (livro: LivroType) => {
    return (
        <L.Container>
            <img alt="" src=""/>
            <div>
                <label>{livro.titulo}</label>
                <label>{livro.genero} - {livro.autor}</label>
                <span>Data Publicação: {String(livro.data_publicacao)}</span>
            </div>
        </L.Container>
    )
}