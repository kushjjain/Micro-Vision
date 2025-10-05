import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MicroplasticsDetectionSystem from "./Components/MicroplasticsDetectionSystem";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/navbar";
import Analysis from "./Components/Analysis";
import LoginSignupPage from "./pages/LoginSignupPage";
import ProfilePage from "./pages/ProfilePage";
import Insights from "./pages/Insights";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microplasticsdetectionsystem" element={<MicroplasticsDetectionSystem />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
};

export default App;
