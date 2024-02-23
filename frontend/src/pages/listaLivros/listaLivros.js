import styled from "styled-components";

export const Container = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`

export const Carrossel = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
    width: 90%;
    height: auto;                                                                                                                                                                                   
    display: flex;
    //overflow-x: auto;
    .buttons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            cursor: pointer;
            margin: 5px;
        }
    }
`