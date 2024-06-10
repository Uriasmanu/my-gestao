import { useState } from "react";

function RemoverProduto() {
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://myloja-api.azurewebsites.net/estoque/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Erro ao remover produto');
            }
            alert('Produto removido com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div>
            <h2>Remover Produto:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID do Produto:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <button type="submit">Remover</button>
            </form>
        </div>
    );
}

export default RemoverProduto;