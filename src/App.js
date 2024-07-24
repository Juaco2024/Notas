import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import PostIt from './components/PostIt';
import './Style/App.css';

function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const savedNotas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(savedNotas);
  }, []);

  const agregarNota = (titulo, descripcion, isImportant) => {
    const nuevaNota = { titulo, descripcion, isImportant };
    const nuevasNotas = [...notas, nuevaNota];
    setNotas(nuevasNotas);
    localStorage.setItem('notas', JSON.stringify(nuevasNotas));
  };

  return (
    <div className="App">
      <h1>Post It Simulator!</h1>
      <Form agregarNota={agregarNota} />
      <div className="notes-container">
        {notas.map((nota, index) => (
          <PostIt
            key={index}
            titulo={nota.titulo}
            descripcion={nota.descripcion}
            isImportant={nota.isImportant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;