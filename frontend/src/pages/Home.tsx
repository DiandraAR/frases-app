import { useEffect, useState } from "react";

// Definimos la estructura de una frase
interface Frase {
  id: number;
  texto: string;
}

function Home() {
  const [frases, setFrases] = useState<Frase[]>([]);

  // Llamar a la API al cargar la página
  useEffect(() => {
    fetch("http://localhost:3000/frases")
      .then((res) => res.json())
      .then((data) => {
        setFrases(data);
      })
      .catch((error) => {
        console.error("Error al obtener frases:", error);
      });
  }, []);

  return (
    <div>
      <h1>Bienvenida a la App</h1>
      <p>Esta es la página principal.</p>

      <h2>Frases disponibles:</h2>

      {frases.length === 0 ? (
        <p>No hay frases todavía.</p>
      ) : (
        frases.map((f) => (
          <p key={f.id}>
            <strong>{f.id}:</strong> {f.texto}
          </p>
        ))
      )}
    </div>
  );
}

export default Home;


