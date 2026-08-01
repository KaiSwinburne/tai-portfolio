import { Home } from "@/pages/home";
import { MobileDataProject } from "@/pages/MobileDataProject";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mobile-data-project" element={<MobileDataProject/>}/>
      </Routes>
    </Router>
  );
}

export default App
