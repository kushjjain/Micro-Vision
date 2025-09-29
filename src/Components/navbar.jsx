
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/"><img src="/image.png" alt="Micro-Vision Logo" className="h-8 w-8 rounded-full object-cover" /></Link>
          <Link to="/"><span className="text-2xl font-bold text-white">&mu;Vision</span></Link>
          
          
        </div>
        <div className="flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors">Home</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white font-medium transition-colors">Dashboard</Link>
          <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;