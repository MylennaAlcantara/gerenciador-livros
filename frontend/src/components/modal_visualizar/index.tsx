import { LivroType } from "../../types/livroType";
import * as MVL from "./modalVisualizarLivro";

interface Props{
    onClose: ()=> void,
    onClick: ()=> void,
    onClickExcluir: ()=> void,
    livro: LivroType
}

export const ModalVisualizarLivro = (props: Props) => {
    const dataFormatada = converterDataParaFormatoBrasileiro(props.livro.data_publicacao);
    function converterDataParaFormatoBrasileiro(data: Date) {
        const dataObj = new Date(data);
        
        const dia = String(dataObj.getUTCDate()).padStart(2, '0');
        const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
        const ano = dataObj.getUTCFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }
    return (
        <MVL.Modal onClick={props.onClose}>
            <MVL.Container onClick={(e: any) => e.stopPropagation()}>
            <div className="dados-livro">
                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div style={{marginBottom: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start"}}>
                        <h2 style={{margin: "0px 5px 5px 5px"}}>{props.livro.titulo}</h2>
                        <span style={{marginLeft: "5px"}}>Gênero: {props.livro.genero} | Autor: {props.livro.autor}</span>
                    </div>
                    <span className="sinopse">Sinopse: {props.livro.sinopse}</span>
                    <div style={{marginTop: "auto",width: "100%", display: "flex", justifyContent: "end", alignItems: "center", textAlign: "center"}}>
                        <span style={{marginLeft: "5px", textAlign: "center"}}>{String(props.livro.avaliacao)}<img alt="estrela" src="/icons/estrela.png"/></span>
                        <span className="data">Data Publicação: {props.livro.data_publicacao ? dataFormatada : ""}</span>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="editar" onClick={props.onClick}>Editar</button>
                <button className="excluir" onClick={props.onClickExcluir}>Excluir</button>
            </div>
            </MVL.Container>
        </MVL.Modal>
    )
}