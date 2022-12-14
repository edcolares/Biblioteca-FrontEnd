import libFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Admin.css";
import axios from "axios";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const [isbn, setIsbn] = useState();
  const [titulo, setTitulo] = useState();
  const [editora, setEditora] = useState();
  const [ano_publicacao, setAnoPublicacao] = useState();
  const [status, setStatus] = useState();


  const getPosts = async () => {
    try {
      const response = await libFetch.get("/livro");
        console.log("Valor de response =>", response.data)
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    await libFetch.delete(`/livro/${id}`);

    const filteredPosts = posts.filter((post) => post.idlivro !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar Livros</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.idlivro}>
            <h2>{post.titulo}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/livro/${post.idlivro}`}>
                Editar
              </Link>
              <Link className="btn delete-btn" onClick={() => deletePost(post.idlivro)}>
                Excluir
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
