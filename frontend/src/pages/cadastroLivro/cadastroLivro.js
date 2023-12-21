import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        width: 100%;
    }
    .formulario{
        width: 100%;
        height: auto;
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
                width: 100%;
            }
            input{
                height: 24px;
            }
            input[type=number]{
                width: 50px;
            }
        }
    }

    button{
        height: 24px;
        width: 100px;
        background-color: green;
        color: white;
    }

    button:hover{
        cursor: pointer;
        box-shadow: 3px 5px 5px gray;
    }

`