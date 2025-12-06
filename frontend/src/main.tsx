import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frases from "./pages/Frases";
import Navbar from "./components/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frases" element={<Frases />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

