import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Aquí guardaremos los datos que vengan del backend
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Esto es como el AJAX que conoces, pero moderno (Fetch API)
    fetch('http://localhost:3000/api/datos')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(err => console.error("Error conectando con el backend:", err));
  }, []); // El [] vacío significa: "ejecuta esto solo una vez al cargar"

  return (
    <div className="App">
      <h1>Mi Web Profesional</h1>
      <div className="card">
        {datos ? (
          <div>
            <p>Mensaje del servidor: <strong>{datos.mensaje}</strong></p>
            <p>Estado: {datos.estado}</p>
            <ul>
              {datos.tecnologias.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Cargando datos del backend...</p>
        )}
      </div>
    </div>
  )
}

export default App