import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Lp from "./Lp.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tsukutte-asobu2023/" element={<App />} />
        <Route path="/tsukutte-asobu2023/lp" element={<Lp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
