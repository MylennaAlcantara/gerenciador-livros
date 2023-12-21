import { LivroType } from "../../types/livroType";
import * as L from "./livro";

interface Props {
    livro: LivroType,
}

export const Livro = (props: Props) => {
    return (
        <L.Container>
            <img alt="" src=""/>
            <div>
                <h2>{props.livro.titulo}</h2>
                <span>{props.livro.genero} - {props.livro.autor}</span>
                <span>{String(props.livro.avaliacao)}</span>
                <span className="data">Data Publicação: {String(props.livro.data_publicacao)}</span>
            </div>
        </L.Container>
    )
}