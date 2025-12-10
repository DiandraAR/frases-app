import { useEffect, useState } from "react";

export default function LuckyChallenge() {
  const [frase, setFrase] = useState("");

  const cargarFrase = () => {
    fetch("http://localhost:3000/frases/categoria/lucky/random")
      .then((res) => res.json())
      .then((data) => {
        if (data?.texto) {
          setFrase(data.texto);
        } else {
          setFrase("No hay retos de suerte disponibles 🍀");
        }
      })
      .catch(() => setFrase("Error cargando reto 🍀"));
  };

  useEffect(() => {
    cargarFrase();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🍀 Reto de la Suerte</h1>

      <p style={{ fontSize: "24px", marginTop: "20px" }}>{frase}</p>

      <button 
        onClick={cargarFrase}
        style={{ marginTop: "20px", padding: "10px", borderRadius: "8px" }}
      >
        🔄 Otro reto
      </button>
    </div>
  );
}



