import libFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NovoLivro.css";

const EditarAutor = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [pais_origem, setPaisOrigem] = useState();

  const { id } = useParams();

  const getAutor = async () => {
    try {
      const response = await libFetch.get(`/autor/${id}`);
      const data = response.data;
      console.log(data);

      setNome(data.nome);
      setPaisOrigem(data.pais_origem);

    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    await libFetch.put(`/autor/${id}`, {
      nome, pais_origem
    }).then(() => { alert("Autor atualizado com sucesso!") });

    navigate("/");//conferir destino livro/:id
  };

  useEffect(() => {
    getAutor();
  }, []);

  return (
    <div className="new-post">
      <h2>Editando autor com Id: { id }</h2>
      <form onSubmit={(e) => editPost(e)}>

        <div className="form-control">
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do autor"
            onChange={(e) => setNome(e.target.value)}
            value={nome || ""}
          ></input>
        </div>

        <div className="form-control">
          <label htmlFor="title">País de Origem:</label>
          <input
            type="text"
            name="pais_origem"
            id="pais_origem"
            placeholder="Digite o país de origem"
            onChange={(e) => setPaisOrigem(e.target.value)}
            value={pais_origem || ""}
          />
        </div>


        <input type="submit" value="Atualizar" className="btn update-btn" />
      </form>
    </div>
  );
};

export default EditarAutor;