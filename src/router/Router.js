import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages";
import Catering from "../pages/Catering";
import HealthyFood from "../pages/HealtyFood";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/healty-food" element={<HealthyFood />} />
      <Route path="/catering" element={<Catering />} />
    </Routes>
  );
}
