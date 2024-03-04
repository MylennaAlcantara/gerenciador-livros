import { fireEvent, render } from "@testing-library/react";
import { screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { ListaLivros } from "../listaLivros";

const renderComponent = () => {
    render(
        <BrowserRouter>
            <ListaLivros/>
        </BrowserRouter>
    )
}

describe("ListaLivro", () => {
    it("Shold be render book list", () => {
        renderComponent();
    });

    it("Shold exclude book correctely", ()=> {
        const monkLivros = {id: 1, titulo: "livro 1"};

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(monkLivros)
        })

        renderComponent();

        fireEvent.click(screen.getByText('Excluir'));

    
        expect(screen)
    })
})