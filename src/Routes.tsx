import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Generator from "./pages/Generator/Generator";
import LearnMore from "./pages/LearnMore/LearnMore";
import PlanPage from "./pages/Plan/Plan";


const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/plan-page" element={<PlanPage />} />
    </Routes>

  );
};

export default AppRoutes;
