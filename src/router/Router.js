import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route> */}
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
