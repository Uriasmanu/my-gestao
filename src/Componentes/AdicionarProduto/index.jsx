import React, { useState } from 'react';

function AdicionarProduto({ onAddProduto }) {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://localhost:7285/estoque', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, quantidade }),
            });
            if (!response.ok) {
                throw new Error('Erro ao adicionar produto');
            }
            const novoProduto = await response.json();
            onAddProduto(novoProduto); // Atualiza a lista de produtos no componente pai
            setNome(''); // Limpa o campo nome
            setQuantidade(''); // Limpa o campo quantidade
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div>
            <h2>Adicionar Produto:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label>
                    Quantidade:
                    <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                </label>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default AdicionarProduto;
