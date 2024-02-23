import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: auto;
    background-color: white;
    border-bottom: 1px solid #9ca4ac;
    display: flex;
    align-items: center;
    justify-content: start;
    position: sticky;
    top: 0px;
    color: #fd6162;

    img{
        height: 40px;
        width: 40px;
        margin: auto 5px;
    }
    h1{
        display: flex;
        align-items: center;
        text-align: center;
        margin-left: 5px;
        cursor: default;
    }

    div{
        display: flex;
        margin: auto;
    }

    button{
        color: #fd6162;
        margin: 5px;
        height: 24px;
        width: 100px;
        border: none;
        border-radius: 0px;
        background-color: transparent;
    }

    button:hover{
        cursor: pointer;
        color: #9ca4ac;
        border-bottom: 1px solid #9ca4ac;
    }

    @media(max-width: 460px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            height: 60px;
            width: 60px;
        }
    }
`