import React from 'react';

function MostrarProdutos({ produtos }) {
    return (
        <div>
            <h2>Produtos:</h2>
            <ul>
                {produtos.map((produto, index) => (
                    <li key={index}>
                        {produto.nome} - {produto.quantidade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MostrarProdutos;
