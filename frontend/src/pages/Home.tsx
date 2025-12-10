import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Bienvenida a la App ✨</h1>
      <p style={{ marginBottom: "25px" }}>Elige un modo para comenzar:</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <button style={btnStyle} onClick={() => navigate("/magic-message")}>
          🔮 Mensaje Mágico
        </button>

        <button style={btnStyle} onClick={() => navigate("/lucky-challenge")}>
          🍀 Reto de la Suerte
        </button>

        <button style={btnStyle} onClick={() => navigate("/naughty-elf")}>
          😈 Duende Travieso
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "12px",
  borderRadius: "10px",
  fontSize: "17px",
  cursor: "pointer",
  background: "#f3f3f3",
  border: "1px solid #ccc",
  transition: "0.2s",
};

export default Home;


