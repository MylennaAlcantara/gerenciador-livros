import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.80);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    margin-top: 10px;
    padding: 10px;
    height: 60%;
    width: 60%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid gray;
    .sinopse{
        text-align: start;
    }
    img{
        height: 15px;
        width: 15px;
        margin-bottom: 0px;
    }
    .dados-livro{
        height: 100%;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: start;
        justify-content: start;
        .img-livro{
            width: 100px;
            height: 100px;
        }
        .data{
            margin: auto 5px 5px auto;
        }
    }
    .buttons{
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .editar{
            background-color: orange;
            border: none;
            color: white;
        }
        .excluir{
            background-color: red;
            border: none;
            color: white;
        }
        button{
            margin: 10px;
            height: 24px;
            width: 100px;
        }
        button:hover{
            cursor: pointer;
            box-shadow: 3px 5px 5px gray;
        }
        
    }
`