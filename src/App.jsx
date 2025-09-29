import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MicroplasticsDetectionSystem from "./Components/MicroplasticsDetectionSystem";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<MicroplasticsDetectionSystem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
