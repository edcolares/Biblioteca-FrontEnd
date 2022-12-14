import libFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./NovoAutor.css";

const NovoAutor = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [pais_origem, setPaisOrigem] = useState();

  const { id } = useParams();

  const createAutor = async (e) => {
    e.preventDefault();

    await libFetch.post(`/livro/${id}/create`, {
      nome, pais_origem
    }).then(() => { alert("Autor incluído com sucesso!") });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Autor no livro { id }</h2>
      <form onSubmit={(e) => createAutor(e)}>

        <div className="form-control">
          <label htmlFor="title">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do autor"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">País de Origem</label>
          <input
            type="text"
            name="pais_origem"
            id="pais_origem"
            placeholder="Digite o país de origem"
            onChange={(e) => setPaisOrigem(e.target.value)}
          />
        </div>

        {/* Botão que executará o submit */}
        <input type="submit" value="Salvar Autor" className="btn update-btn" />

      </form>
    </div>
  );
};

export default NovoAutor;
