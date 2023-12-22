import { LivroType } from "../../types/livroType";
import * as L from "./livro";

interface Props {
    livro: LivroType,
    onClick: ()=> void,
    abrirVisualizar: ()=> void
    aberto: boolean
}

export const Livro = (props: Props) => {
    const dataFormatada = converterDataParaFormatoBrasileiro(props.livro.data_publicacao);
    function converterDataParaFormatoBrasileiro(data: Date) {
        const dataObj = new Date(data);
        
        const dia = String(dataObj.getUTCDate()).padStart(2, '0');
        const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
        const ano = dataObj.getUTCFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }
    return (
        <L.Container onClick={props.abrirVisualizar}>
            <div className="dados-livro">
                <img alt="livro" src="/icons/livro.png" className="img-livro"/>
                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div style={{marginBottom: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start"}}>
                        <h2 style={{margin: "0px 5px 5px 5px"}}>{props.livro.titulo}</h2>
                        <span style={{marginLeft: "5px"}}>Gênero: {props.livro.genero} | Autor: {props.livro.autor}</span>
                    </div>
                    <span>{props.aberto ? props.livro.sinopse : null}</span>
                    <div style={{marginTop: "auto",width: "100%", display: "flex", justifyContent: "end", alignItems: "center", textAlign: "center"}}>
                        <span style={{marginLeft: "5px", textAlign: "center"}}>{String(props.livro.avaliacao)}<img alt="estrela" src="/icons/estrela.png"/></span>
                        <span className="data">Data Publicação: {props.livro.data_publicacao ? dataFormatada : ""}</span>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={props.onClick}>Editar</button>
            </div>
        </L.Container>
    )
}