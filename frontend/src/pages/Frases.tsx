import { useEffect, useState } from "react";
import { getFrases } from "../api/frasesApi";

function Frases() {
  const [frases, setFrases] = useState<any[]>([]);

  // Cargar frases al entrar
  useEffect(() => {
    cargarFrases();
  }, []);

  const cargarFrases = async () => {
    const data = await getFrases();
    setFrases(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frases</h1>

      <ul>
        {frases.map((f) => (
          <li key={f.id} style={{ marginBottom: "10px" }}>
            {f.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Frases;


