import { useEffect, useState } from "react";

export default function MagicMessage() {
  const [frase, setFrase] = useState("");

  const cargarFrase = () => {
    fetch("http://localhost:3000/frases/categoria/magic/random")
      .then((res) => res.json())
      .then((data) => {
        if (data?.texto) {
          setFrase(data.texto);
        } else {
          setFrase("No hay frases mágicas todavía ✨");
        }
      })
      .catch(() => setFrase("Error cargando frase ✨"));
  };

  useEffect(() => {
    cargarFrase();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>✨ Mensaje Mágico ✨</h1>

      <p style={{ fontSize: "24px", marginTop: "20px" }}>{frase}</p>

      <button
        onClick={cargarFrase}
        style={{ marginTop: "20px", padding: "10px", borderRadius: "8px" }}
      >
        🔄 Otro mensaje
      </button>
    </div>
  );
}
