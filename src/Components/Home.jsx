import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Microscope, Shield, Zap, Globe, Users, ArrowRight } from "lucide-react";
import { Eye } from "lucide-react";

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero-background.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          style={{ pointerEvents: 'none' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 z-10"></div>
        <div className="relative px-6 py-40 md:py-48">
          <div className="max-w-7xl mx-auto z-20 relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "rgb(196, 209, 224)" }}>Eureka_200's</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              &mu;Vision
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary field-deployable microplastics detection system powered by advanced AI and microscopy technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={isLoggedIn ? '/analysis' : '/login'}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>Launch Detection System</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/Insights"
                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <Eye className="h-5 w-5" />
                <span>Insights</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
