import React, { useState, useEffect } from 'react';

function ChamadaApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchData = async () => {
            try {
                // Realiza a requisição para a API
                const response = await fetch('https://myloja-api.azurewebsites.net/estoquehttps://myloja-api.azurewebsites.net/estoque');
                // Verifica se a resposta está ok
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                // Converte a resposta para JSON
                const jsonData = await response.json();
                // Atualiza o estado com os dados recebidos
                setData(jsonData);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        // Chama a função para buscar os dados quando o componente monta
        fetchData();
    }, []); // O array vazio como segundo argumento garante que o useEffect só seja executado uma vez

    return (
        <div>
            <h1>Dados da API:</h1>

            <ul>
                {data && data.map((produto) => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>

        </div>
    );
}

export default ChamadaApi;
