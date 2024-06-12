import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Componentes/Home';



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
            <Home/>
        </div>
    );
}

export default App;
