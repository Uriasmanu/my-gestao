import { styled } from "styled-components"

import perfumaria from '../../imagens/perfumaria.png';
import login from '../../icons/login.svg';
import { Link } from "react-router-dom";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 2%;

    .cabecalho{
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            border: none;
            background: none;


            img{
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }

    .subtitulo{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;

        h3{
            font-size: 3rem;
            z-index: 1;
            position: relative;
            width: 40%;
        }

        .moldura{
            width: 50%;
            height: 100%;
            z-index: 0;
            position: absolute;
            top: 9%;
            left: 45%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 46%;
            }
        }
        
    }

    .catalogo{
        margin-top:10%;
        position: relative;
    }
`

const CardProduto = styled.div`
.card {
  width: 190px;
  background: white;
  padding: .4em;
  border-radius: 6px;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: rgb(88, 87, 87);
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
`

const Home = () => {
    return (
        <HomeDiv>
            <div className="cabecalho">
                <h1>Titulo da pagina</h1>
                <Link to="/login">
                    <button><img src={login} alt="login" /></button>
                </Link>
            </div>
            <div className="subtitulo">
                <h3>Slogam para chamar atenção do cliente para ver os produtos a baixo</h3>
                <div className="moldura">
                    <img src={perfumaria} alt="perfumaria" />
                </div>
            </div>
            <div className="catalogo">
                <h2>Catalogo</h2>
                <div className="linha"></div>
            </div>
            <CardProduto>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category"> Illustration </div>
                    <div className="heading"> A heading that must span over two lines
                        <div className="author"> By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                </div>
            </CardProduto>
        </HomeDiv>
    );
}

export default Home;
