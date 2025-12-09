import { useEffect, useState } from "react";

export default function MagicMessage() {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/frases/random") // tu endpoint del backend
      .then((res) => res.json())
      .then((data) => setFrase(data.frase));
  }, []);

  return (
    <div>
      <h1>✨ Mensaje mágico ✨</h1>
      <p style={{ fontSize: "24px", marginTop: "20px" }}>{frase}</p>
    </div>
  );
}
