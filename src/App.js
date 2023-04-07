import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default App;
