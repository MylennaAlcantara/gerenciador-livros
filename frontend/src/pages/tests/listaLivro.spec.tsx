import { fireEvent, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
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
    it("Should be render book list", () => {
        renderComponent();
    });

    it('Should call book API and display the data correctely', async () => {
        const mockLivros = [{ id: 1, titulo: 'Livro 1' }, { id: 2, titulo: 'Livro 2' }];
        
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockLivros),
        });
    
        renderComponent();
    
        await waitFor(() => {
            expect(screen.getByText('Livro 1')).toBeInTheDocument();
            expect(screen.getByText('Livro 2')).toBeInTheDocument();
        });
    });
    
    it('Should open and close the view  modal correctely', async () => {
        renderComponent();
    
        fireEvent.click(screen.getByText('Visualizar'));
    
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    
        fireEvent.click(screen.getByTestId('fechar-modal'));
    
        await waitForElementToBeRemoved(() => screen.getByTestId('modal'));
    });
    
    it('Should exclude book correctely', async () => {
        const mockLivros = [{ id: 1, titulo: 'Livro 1' }];
        
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockLivros),
        });
    
        renderComponent();
    
        await waitFor(() => {
            expect(screen.getByText('Livro 1')).toBeInTheDocument();
        });
    
        fireEvent.click(screen.getByText('Excluir'));
    
        await waitForElementToBeRemoved(() => screen.getAllByText('Livro 1'));
    
        expect(screen.getByText('Ainda não existem livros cadastrados!')).toBeInTheDocument();
    });
    
})