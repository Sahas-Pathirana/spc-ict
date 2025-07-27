import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, } from 'lucide-react';
import Icon from '../components/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-black-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-r from-black-600 to-purple-600 p-2 rounded-lg">
                




                <img src={Icon} alt="Zap Icon" className="h-15 w-9" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
              SPC_ICT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
               
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-gray-50'
                    : 'text-white hover:bg-gray-50 hover:rounded-lg transition duration-300 hover:text-blue-600'
                }`}

              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-600  rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-white hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;