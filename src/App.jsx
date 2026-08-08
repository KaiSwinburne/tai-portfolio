import { Home } from "@/pages/home";
import { MobileDataProject } from "@/pages/MobileDataProject";
import { SupplyDropProject } from "@/pages/SupplyDropProject";
import { AnomalyDetectionProject } from "@/pages/AnomalyDetectionProject";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mobile-data-project" element={<MobileDataProject/>}/>
        <Route path="/supply-drop-project" element={<SupplyDropProject/>}/>
        <Route path="/anomaly-detection-project" element={<AnomalyDetectionProject/>}/>
      </Routes>
    </Router>
  );
}

export default App
