import React, { useState, useEffect } from 'react';

function MostrarProdutos() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://myloja-api.azurewebsites.net/estoque');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dados da API:</h1>

            <ul>
                {data && data.map((produto) => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.quantidade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MostrarProdutos;
