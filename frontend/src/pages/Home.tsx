import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Bienvenida a la App ✨</h1>
      <p>Elige un modo para comenzar:</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
        <button
          onClick={() => navigate("/magic-message")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          🔮 Mensaje Mágico
        </button>

        <button
          onClick={() => navigate("/lucky-challenge")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          🍀 Reto de la Suerte
        </button>

        <button
          onClick={() => navigate("/naughty-elf")}
          style={{ padding: "10px", borderRadius: "8px", fontSize: "16px" }}
        >
          😈 Duende Travieso
        </button>
      </div>
    </div>
  );
}

export default Home;

