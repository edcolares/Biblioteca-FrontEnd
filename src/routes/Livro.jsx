import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './Livro.css'

const Livro = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [livro, setLivro] = useState([]);

  const getLivro = async () => {
    try {
      const response = await blogFetch.get(`/livro/${id}`);
      const data = response.data;

      setLivro(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };


  const deleteLivro = async (id) => {
    try {
      await blogFetch.delete(`/livro/${id}`).then(() => { alert("Livro deletado com sucesso!") }).catch(error => { alert("Não foi possível excluir esse livro.", error) });

    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  const deleteAutor = async (id) => {
    try {
      const result = await blogFetch.delete(`/autor/${id}`).then(() => { alert("Autor deletado com sucesso!") }).catch(error => { alert("Não foi possível deletar o autor.", error) });

    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };


  useEffect(() => {
    getLivro();
  }, []);

  return (
    <div className="post-container">
      {!livro.titulo ? (
        <p>Carregando... Aqui</p>
      ) : (
        <>
          <div className="post">
            <h2>{livro.titulo}</h2>
            <p>ISBN: {livro.isbn}</p>
            <p>Editora: {livro.editora}</p>
            <p>Ano publicação: {livro.ano_publicacao}</p>
            <p>Status: {livro.status}</p>
            <h3>Autores
              <Link className="btnMini create-btn" to={`/livro/createAutor/${livro.idlivro}`}>
                Incluir
              </Link>
            </h3>
            {
              livro.autores.map(autor => (
                <div key={autor.idautor}>
                  <p>Nome: {autor.nome}
                    <Link className="btnMini delete-btn" onClick={() => deleteAutor(autor.idautor)}>
                      Deletar
                    </Link>
                    <Link className="btnMini edit-btn" to={`/${autor.idautor}`}>
                      Atualizar
                    </Link>
                  </p>
                  <p>Pais de Origem: {autor.pais_origem}</p>
                </div>
              ))
            }
          </div>

          <Link className="btn" to={`/`}>
            Voltar
          </Link>

          <Link className="btn edit-btn" to={`/livro/editar/${livro.idlivro}`}>
            Editar
          </Link>

          <Link className="btn delete-btn" onClick={() => deleteLivro(livro.idlivro)}>
            Excluir
          </Link>

        </>
      )}
    </div>
  );
};

export default Livro;