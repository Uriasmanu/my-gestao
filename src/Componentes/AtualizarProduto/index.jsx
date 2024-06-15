import { useState } from "react";

function AtualizarProduto() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://localhost:7285/estoque/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, quantidade }),
            });
            if (!response.ok) {
                throw new Error('Erro ao atualizar produto');
            }
            alert('Produto atualizado com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div>
            <h2>Atualizar Produto:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID do Produto:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    Novo Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label>
                    Nova Quantidade:
                    <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                </label>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default AtualizarProduto;