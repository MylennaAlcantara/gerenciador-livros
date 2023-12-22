import { useNavigate } from "react-router-dom";
import * as H from "./header";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <H.Container>
            <h1>Gerenciador de Livros</h1>
            <div>
                <button onClick={()=> {navigate("/livros"); localStorage.clear()}}>Lista</button>
                <button onClick={()=> {navigate("/cadastroLivro"); localStorage.clear()}}>Cadastro</button>
            </div>
        </H.Container>
    )
}