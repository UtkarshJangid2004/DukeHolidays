import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-indigo-100 w-full fixed top-0 z-50 h-7 flex items-center">
        <div className="mx-auto px-2 sm:px-4 lg:px-16 w-full h-6 flex items-center">
          <p className="text-[12px] font-bold text-indigo-600 leading-none">Welcome to Apollo Expeditions</p>
        </div>
      </div>
      <nav className="bg-white shadow-lg fixed w-full top-7 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-600">Apollo Expeditions</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-4 lg:space-x-8">
                <Link to="/" className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</Link>
                <Link to="/offers" className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Offers & Packages
                </Link>
              
              <li>
                <Link to="/encyclopedia" className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Encyclopedia
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/vlogs" className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Our Vlogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link 
                  to="/"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/offers"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Offers & Packages
                </Link>
                <Link
                  to="/encyclopedia"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Encyclopedia
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  to="/vlogs"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Our Vlogs
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
