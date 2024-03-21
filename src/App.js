import React, { useState } from "react";

const App = () => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [publicaciones, setPublicaciones] = useState([
    {
      id: 1,
      titulo: "Desenvolvendo com REACT",
      imagen:
        "https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png"
    }
  ]);
  const [contadorId, setContadorId] = useState(2);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nuevaPublicacion = {
      id: contadorId,
      titulo: titulo,
      imagen: imagen
    };
    setPublicaciones([...publicaciones, nuevaPublicacion]);
    setTitulo("");
    setImagen("");
    setContadorId(contadorId + 1);
  };

  const handleEliminarPublicacion = (id) => {
    if (id !== 1) {
      const nuevasPublicaciones = publicaciones.filter(
        (publicacion) => publicacion.id !== id
      );
      setPublicaciones(nuevasPublicaciones);
    }
  };

  return (
    <div>
      <h2>Atividade REACT - Rodrigo Prieto - Exercício 2</h2>
      <h3>Inserir e mostrar posts</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Link da imagem:
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {publicaciones.map((publicacion) => (
        <div key={publicacion.id}>
          <h3>{publicacion.titulo}</h3>
          <img src={publicacion.imagen} alt="Publicación" />
          {publicacion.id !== 1 && (
            <button onClick={() => handleEliminarPublicacion(publicacion.id)}>
              Eliminar
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
