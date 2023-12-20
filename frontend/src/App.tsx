import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ListaLivros } from './pages/listaLivros';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/livros" element = {ListaLivros}/>
      </Routes>
    </div>
  );
}

export default App;
