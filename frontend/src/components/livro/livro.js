import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    aling-items: center;
    justify-content: center;
    div{
        display: flex;
        flex-direction: column;
        aling-items: start;
        .data{
            margin: auto 5px 5px auto;
        }
    }

    &&:hover{
        cursor: pointer;
        height: 120px;
        width: 120px;
        box-shadown: 3px 5px 5px gray;
    }
`