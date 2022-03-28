import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages";
import Catering from "../pages/Catering";
import HealthyFood from "../pages/HealthyFood";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/healthy-food" element={<HealthyFood />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
