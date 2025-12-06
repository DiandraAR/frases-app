import { useEffect, useState } from "react";
import { getFrases, createFrase, deleteFrase } from "../api/frasesApi";

function Frases() {
  const [frases, setFrases] = useState<any[]>([]);
  const [nuevaFrase, setNuevaFrase] = useState("");

  // Cargar frases al entrar
  useEffect(() => {
    cargarFrases();
  }, []);

  const cargarFrases = async () => {
    const data = await getFrases();
    setFrases(data);
  };

  const handleAdd = async () => {
    if (!nuevaFrase.trim()) return;
    await createFrase(nuevaFrase);
    setNuevaFrase("");
    cargarFrases();
  };

  const handleDelete = async (id: number) => {
    await deleteFrase(id);
    cargarFrases();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frases</h1>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Nueva frase"
          value={nuevaFrase}
          onChange={(e) => setNuevaFrase(e.target.value)}
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <ul>
        {frases.map((f) => (
          <li key={f.id}>
            {f.texto}
            <button onClick={() => handleDelete(f.id)} style={{ marginLeft: "10px" }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Frases;

