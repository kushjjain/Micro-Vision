import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { LogIn, User, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || 'User';
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setShowDropdown(false);
    window.location.href = '/';
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

        {/* Navigation Links & Auth */}
        {/* <div className="flex items-center space-x-2">
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
          </Link> */}
        {/* Navigation Links & Auth */}
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

          {/* 👇 Only visible when logged in */}
          {isLoggedIn && (
            <>
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
            </>
          )}

          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive('/about')
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
          >
            About Us
          </Link>


          {/* Auth Section */}
          {isLoggedIn ? (
            <div className="relative ml-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 transition-all duration-200"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium">{userName}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  <Link
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-3 text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors w-full text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-4 flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;