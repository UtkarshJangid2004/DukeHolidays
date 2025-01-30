import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className="bg-indigo-100 w-full fixed top-0 z-50 h-7 flex items-center">
        <div className="mx-auto px-2 sm:px-4 lg:px-16 w-full h-6 flex items-center">
          <p className="text-[12px] font-bold text-indigo-600 leading-none">Welcome to duke holidays</p>
        </div>
      </div>
      <nav className="bg-white shadow-lg fixed w-full top-7 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-indigo-600">Duke Holidays</Link>
            </div>
            
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link to="/offers" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Offers & Packages
                </Link>
              </li>
              <li>
                <Link to="/encyclopedia" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Encyclopedia
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/vlogs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Our Vlogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
