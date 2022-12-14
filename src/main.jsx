import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";

import Home from "./routes/Home";
import NovoLivro from "./routes/NovoLivro";
import Admin from "./routes/Admin";
import NovoAutor from "./routes/NovoAutor"

import "./index.css";
import Livro from "./routes/Livro";
import EditarLivro from "./routes/EditarLivro";
import EditarAutor from "./routes/EditarAutor";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/livro/:id",
        element: <Livro />,
      },
      {
        path: "/livro",
        element: <NovoLivro />,
      },
      {
        path: "/livro/createAutor/:id",
        element: <NovoAutor />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      ,
      {
        path: "/livro/editar/:id",
        element: <EditarLivro />,
      },
      {
        path: "/autor/:id",
        element: <EditarAutor />,
      },
      {
        path: "/autor/:id",
        element: <EditarAutor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
