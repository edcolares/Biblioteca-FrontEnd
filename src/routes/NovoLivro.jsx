import libFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NovoLivro.css";

const NovoLivro = () => {
  const navigate = useNavigate();

  const [isbn, setIsbn] = useState();
  const [titulo, setTitulo] = useState();
  const [editora, setEditora] = useState();
  const [ano_publicacao, setAnoPublicacao] = useState();
  const [status, setStatus] = useState();

  const createLivro = async (e) => {
    e.preventDefault();

    await libFetch.post("/livro", {
      isbn, titulo, editora, ano_publicacao, status,
    }).then(() => { alert("Livro incluído com sucesso!") });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo LIVRO</h2>
      <form onSubmit={(e) => createLivro(e)}>

        {/* Campo ISBN */}
        <div className="form-control">
          <label htmlFor="title">ISBN:</label>
          <input
            type="text"
            name="isbn"
            id="isbn"
            placeholder="Digite o isbn"
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>

        {/* Campo TITULO */}
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Digite o título do livro"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        {/* Campo EDITORA */}
        <div className="form-control">
          <label htmlFor="title">Editora:</label>
          <input
            type="text"
            name="editora"
            id="editora"
            placeholder="Digite o nome da editora"
            onChange={(e) => setEditora(e.target.value)}
          />
        </div>

        {/* Campo ANO PUBLICACAO */}
        <div className="form-control">
          <label htmlFor="title">Ano Publicação:</label>
          <input
            type="text"
            name="ano_publicacao"
            id="ano_publicacao"
            placeholder="Digite o ano de publicação"
            onChange={(e) => setAnoPublicacao(e.target.value)}
          />
        </div>

        {/* Campo STATUS */}
        <div className="form-control">
          <label htmlFor="title">Status:</label>
          <input
            type="text"
            name="status"
            id="status"
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        {/* Botão que executará o submit */}
        <input type="submit" value="Salvar Livro" className="btn update-btn" />

      </form>
    </div>
  );
};

export default NovoLivro;
