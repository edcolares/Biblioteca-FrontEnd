import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  // Recupera os valores
  const [livro, setLivro] = useState([]);

  const getLivro = async () => {
    try {
      const response = await blogFetch.get("/livro");

      const data = response.data;

      setLivro(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLivro();
  }, []);

  return (
    <div className="home">
      <h1>Lista de livros</h1>
      {livro.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        livro.map((livro) => (
          <div className="post" key={livro.idlivro}>
            <h2>{livro.titulo}</h2>
            <Link className="btn" to={`/livro/${livro.idlivro}`}>
              Saber mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
