
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MicroplasticsDetectionSystem from "./Components/MicroplasticsDetectionSystem";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microplastics" element={<MicroplasticsDetectionSystem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
