import React, { useState, useEffect } from 'react';
import './App.css';
import AdicionarProduto from './Componentes/AdicionarProduto';
import AtualizarProduto from './Componentes/AtualizarProduto';
import MostrarProdutos from './Componentes/MostrarProdutos';
import RemoverProduto from './Componentes/RemoverProduto';

function App() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Fetch produtos ao montar o componente
        const fetchProdutos = async () => {
            try {
                const response = await fetch('https://myloja-api.azurewebsites.net/estoque');
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchProdutos();
    }, []);

    const adicionarProduto = async (produto) => {
        try {
            const response = await fetch('https://myloja-api.azurewebsites.net/estoque', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
            if (!response.ok) {
                throw new Error('Erro ao adicionar produto');
            }
            const novoProduto = await response.json();
            setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className="App">
            <MostrarProdutos produtos={produtos} />
            <AdicionarProduto onAddProduto={adicionarProduto} />
            <RemoverProduto />
            <AtualizarProduto />
        </div>
    );
}

export default App;
