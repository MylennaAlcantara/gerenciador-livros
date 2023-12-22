import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    padding: 10px;
    height: auto;
    width: 60%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid gray;
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

    &&:hover{
        cursor: pointer;
        box-shadow: 3px 5px 5px gray;
        background-color: #eeeee4;
    }

    @media(max-width: 460px){
        width: 90%;
        .dados-livro{{
            .img-livro{
                height: 50px;
                width: 50px;
            }
        }
    }
`