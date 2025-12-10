import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frases from "./pages/Frases";
import MagicMessage from "./pages/MagicMessage";
import LuckyChallenge from "./pages/LuckyChallenge";
import NaughtyElf from "./pages/NaughtyElf";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/magic-message" element={<MagicMessage />} />
        <Route path="/lucky-challenge" element={<LuckyChallenge />} />
        <Route path="/naughty-elf" element={<NaughtyElf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


