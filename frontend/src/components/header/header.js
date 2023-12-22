import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10%;
    background-color: gray;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0px;
    div{
        display: flex;
    }

    button{
        margin: 5px;
        height: 24px;
        width: 100px;
        border: none;
        border-radius: 0px;
        background-color: transparent;
        color: white;
    }

    button:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
    }
`