import { useNavigate } from "react-router-dom";
import * as H from "./header";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <H.Container>
            <h1><img alt="" src="/icons/livro.png"/>Gerenciador de Livros</h1>
            <div>
                <button onClick={()=> {navigate("/"); localStorage.clear()}}>Lista</button>
                <button onClick={()=> {navigate("/cadastroLivro"); localStorage.clear()}}>Cadastro</button>
            </div>
        </H.Container>
    )
}