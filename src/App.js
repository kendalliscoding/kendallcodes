import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
