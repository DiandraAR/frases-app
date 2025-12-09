import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Definimos la estructura de una frase
interface Frase {
  id: number;
  texto: string;
}

function Home() {
  const [frases, setFrases] = useState<Frase[]>([]);
  const navigate = useNavigate();

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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Bienvenida a la App ✨</h1>
      <p>Elige un modo para comenzar:</p>

      {/* 🔮 BOTONES DE NAVEGACIÓN */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
        <button
          onClick={() => navigate("/MagicMessage")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          🔮 Modo Mensaje Mágico
        </button>

        <button
          onClick={() => navigate("/LuckyChallenge")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          🍀 Reto de la Suerte
        </button>

        <button
          onClick={() => navigate("/NaughtyElf")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          😈 Duende Travieso
        </button>
      </div>

      {/* 📜 Lista de frases existentes */}
      <h2 style={{ marginTop: "30px" }}>Frases disponibles:</h2>

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




