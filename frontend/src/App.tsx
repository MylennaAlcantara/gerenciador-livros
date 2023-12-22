import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CadastroLivro } from './pages/cadastroLivro';
import { ListaLivros } from './pages/listaLivros';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListaLivros/>}/>
        <Route path='/cadastroLivro' element={<CadastroLivro/>}/>
      </Routes>
    </div>
  );
}

export default App;
