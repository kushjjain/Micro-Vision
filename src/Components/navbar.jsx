import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="backdrop-blur-lg border-b border-purple-500/20 w-full z-50 sticky top-0" style={{ backgroundColor: 'rgba(26, 32, 44, 0.7)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/image.png"
            alt="Micro-Vision Logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
            μVision
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive('/')
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive('/dashboard')
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
          >
            Dashboard
          </Link>
          <Link
            to="/analysis"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive('/analysis')
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
          >
            Analysis
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive('/about')
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;