import './App.css';
import AdicionarProduto from './Componentes/AdicionarProduto';
import AtualizarProduto from './Componentes/AtualizarProduto';
import MostrarProdutos from './Componentes/MostrarProdutos';
import RemoverProduto from './Componentes/RemoverProduto';


function App() {
  return (
    <div className="App">
      <MostrarProdutos/>
      <AdicionarProduto/>
      <RemoverProduto/>
      <AtualizarProduto/>
    </div>
  );
}

export default App;
