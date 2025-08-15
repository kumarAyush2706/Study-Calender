import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white'
    }`}>
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/GE-ACADEMY-LTD.-1-1024x134.png" 
              alt="GE Academy Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Success Stories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Login Button */}
          <button 
            onClick={handleLoginClick}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
