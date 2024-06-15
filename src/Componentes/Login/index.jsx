import { styled } from "styled-components"
import voltar from "../../icons/voltar.svg";
import { useState } from "react";



const Voltsr = styled.div`
  position: absolute;
    margin: 2%;
    width: 42px;
    height: 42px;

    img{
      width: 100%;
      height: 100%;
    }
`

const LoginCard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
    align-items: center;
    justify-content: center;


.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 20rem;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.button-submit:hover {
  background-color: #252727;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
  ;
}

`


const Login = () => {
  const [Email, SetEmail] = useState("");
  const [Senha, SetSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('https://localhost:7285/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Email.trim(), senha: Senha.trim() }),
        });
        if (!response.ok) {
            throw new Error('Email ou senha incorreta');
        }
        const data = await response.json();
      console.log('Login bem-sucedido:', data);
      // Aqui você pode redirecionar o usuário para outra página ou realizar outra ação.
    } catch (error) {
      console.error('Erro:', error);
      setError(error.message);
    }
  };
  return (
    <>
    <Voltsr>
    <img src={voltar} alt="Voltar" />
    </Voltsr>
    <LoginCard >
      
      <form class="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Email </label></div>
        <div className="inputForm">

          <input 
          type="text" 
          className="input" 
          onChange={(e) => SetEmail(e.target.value)}
          value={Email}
          />
        </div>

        <div className="flex-column">
          <label>Senha </label></div>
        <div className="inputForm">
        <input 
        type="text" 
        className="input" 
        onChange={(e) => SetSenha(e.target.value)}
        value={Senha}
        />

        </div>

        <div className="flex-row">
          <div>

          </div>
          <span className="span">Esqueceu a senha?</span>
        </div>
        {error && <p className="error">{error}</p>}
          <button className="button-submit">Entrar</button>
      </form>
    </LoginCard>
    </>
  )

}

export default Login;