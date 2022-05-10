import { Routes, Route } from "react-router-dom";
import Homepage from "../pages";
import Catering from "../pages/Catering";
import HealthyFood from "../pages/HealthyFood";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/healthy-food" element={<HealthyFood />} />
      <Route path="/catering" element={<Catering />} />
    </Routes>
  );
};

export default App;
