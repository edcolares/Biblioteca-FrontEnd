import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NovoLivro.css";

const EditarLivro = () => {
  const navigate = useNavigate();

  const [isbn, setIsbn] = useState();
  const [titulo, setTitulo] = useState();
  const [editora, setEditora] = useState();
  const [ano_publicacao, setAnoPublicacao] = useState();
  const [status, setStatus] = useState();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const { id } = useParams();

  const getLivro = async () => {
    try {
      const response = await blogFetch.get(`/livro/${id}`);
      const data = response.data;
      console.log(data);

      setIsbn(data.isbn);
      setTitulo(data.titulo);
      setEditora(data.editora);
      setAnoPublicacao(data.ano_publicacao);
      setStatus(data.status);

    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();
    
    await blogFetch.put(`/livro/${id}`, {
      isbn, titulo, editora, ano_publicacao, status,
    }).then(() => { alert("Livro atualizado com sucesso!") });

    navigate("/");
  };

  useEffect(() => {
    getLivro();
  }, []);

  return (
    <div className="new-post">
      <h2>Editar livro</h2>
      <form onSubmit={(e) => editPost(e)}>

        <div className="form-control">
          <label htmlFor="title">ISBN</label>
          <input
            name="isbn"
            id="isbn"
            placeholder="Digite o código ISBN"
            onChange={(e) => setBody(e.target.value)}
            value={isbn || ""}
          ></input>
        </div>

        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Digite o título"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Editora</label>
          <input
            type="text"
            name="editora"
            id="editora"
            placeholder="Digite o nome da editora"
            onChange={(e) => setEditora(e.target.value)}
            value={editora || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Ano Publicação</label>
          <input
            type="text"
            name="ano_publicacao"
            id="ano_publicacao"
            placeholder="Digite o ano de publicação"
            onChange={(e) => setAnoPublicacao(e.target.value)}
            value={ano_publicacao || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Status</label>
          <input
            type="text"
            name="status"
            id="status"
            placeholder="Digite o status"
            onChange={(e) => setStatus(e.target.value)}
            value={status || ""}
          />
        </div>

        <input type="submit" value="Atualizar" className="btn update-btn" />
      </form>
    </div>
  );
};

export default EditarLivro;
