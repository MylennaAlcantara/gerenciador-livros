import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    form{
        width: 100%;
    }
    .formulario{
        width: 100%;
        height: auto;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        box-shadow: 3px 5px 5px gray;
        border: 1px solid gray;
        .labels{
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-around;
            label{
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
            }
            textarea{
                resize:none;
                height: 50px;
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
        background-color: green;
        color: white;
        border-radius: 5px;
        border: none;
    }

    .button-salvar:hover{
        cursor: pointer;
        box-shadow: 3px 5px 5px gray;
    }

`