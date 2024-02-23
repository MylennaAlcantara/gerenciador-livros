import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    
    .conteudo{
        width: 60%;
    }
    form{
        width: 100%;
    }
    .formulario{
        margin-top: 10px;
        width: 100%;
        height: auto;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(254,254,254);
        h1{
            color: #252525;
            cursor: default;
        }
        .labels{
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-around;
            label{
                color: #252525;
                margin: auto 0px;
                white-space: nowrap;
                font-weight: bold;
            }
        }
        .campos{
            width: 100%;
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            align-items: start;
            textarea,
            input{
                margin-bottom: 5px;
                width: 90%;
                background-color: transparent;
            }
            textarea{
                resize:none;
                height: 24px;
                white-space: wrap;
            }
            input{
                height: 24px;
                border: none;
                border-bottom: 1px solid gray;
            }
            input[type=number]{
                width: 50px;
            }
            input[type=date]{
                width: 100px;
            }
        }
    }

    .button-salvar{
        height: 24px;
        width: 100px;
        margin-top: 20px;
        background-color: #fd6162;
        color: white;
        border-radius: 5px;
        border: none;
    }

    .button-salvar:hover{
        cursor: pointer;
        box-shadow: 3px 5px 5px gray;
    }

    @media(max-width: 460px){
        .conteudo{
            width: 90%;
        }
    }
`