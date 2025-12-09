import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frases from "./pages/Frases";
import MagicMessage from "./pages/MagicMessage";
import LuckyChallenge from "./pages/LuckyChallenge";
import NaughtyElf from "./pages/NaughtyElf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/MagicMessage" element={<MagicMessage />} />
        <Route path="/LuckyChallenge" element={<LuckyChallenge />} />
        <Route path="/NaughtyElf" element={<NaughtyElf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

