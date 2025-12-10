import { useEffect, useState } from "react";

export default function NaughtyElf() {
  const [frase, setFrase] = useState("");

  const cargarFrase = () => {
    fetch("http://localhost:3000/frases/categoria/naughty/random")
      .then((res) => res.json())
      .then((data) => {
        if (data?.texto) {
          setFrase(data.texto);
        } else {
          setFrase("El duende no tiene travesuras nuevas 😈");
        }
      })
      .catch(() => setFrase("Error cargando la travesura 😈"));
  };

  useEffect(() => {
    cargarFrase();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>😈 Duende Travieso</h1>

      <p style={{ fontSize: "24px", marginTop: "20px" }}>{frase}</p>

      <button 
        onClick={cargarFrase}
        style={{ marginTop: "20px", padding: "10px", borderRadius: "8px" }}
      >
        🔄 Otra travesura
      </button>
    </div>
  );
}




