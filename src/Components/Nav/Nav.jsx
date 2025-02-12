import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([
    {
      id: "India",
      name: "India",
    },
    {
      id: "Thailand", 
      name: "Thailand",
    },
    {
      id: "Dubai",
      name: "Dubai",
    },
    {
      id: "Singapore",
      name: "Singapore", 
    },
    {
      id: "Malaysia",
      name: "Malaysia",
    },
    {
      id: "Sri Lanka",
      name: "Sri Lanka",
    },
    {
      id: "Nepal",
      name: "Nepal",
    },
    {
      id: "Bhutan",
      name: "Bhutan",
    },
  ]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // useEffect(() => {
  //   // Fetch countries from dummy API
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const data = await response.json();
  //       // Extract just the names from users data
  //       const names = data.map(user => ({
  //         name: user.name,
  //         id: user.name.toLowerCase().replace(/\s+/g, '-') // Convert name to URL-friendly format
  //       }));
  //       setCountries(names);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  return (
    <>
      <div className="bg-indigo-100 w-full fixed top-0 z-50 h-7 flex items-center">
        <div className="mx-auto px-2 sm:px-4 lg:px-16 w-full h-6 flex items-center">
          <p className="text-[12px] font-bold text-indigo-600 leading-none">
            Welcome to Apollo Expeditions
          </p>
        </div>
      </div>
      <nav className="bg-white shadow-lg fixed w-full top-7 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-xl sm:text-2xl font-bold text-indigo-600"
              >
                <img
                  src={logo}
                  alt="Apollo Expeditions Logo"
                  className="h-48 w-auto object-contain"
                  loading="eager"
                  width="200"
                  height="64"
                />
              </Link>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:items-center md:flex space-x-4 lg:space-x-8">
              <div>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="/offers"
                  className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Offers & Packages
                </Link>
              </div>
              <div>
                <Link
                  to="/vlogs"
                  className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Our Vlogs
                </Link>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  Travel Guide
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div className="py-1" role="menu">
                    {countries.map((country) => (
                      <Link
                        key={country.id}
                        to={`/encyclopedia/${country.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
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
                  to="/vlogs"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Our Vlogs
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
                  >
                    Travel Guide
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showCountryDropdown && (
                    <div className="pl-4">
                      {countries.map((country) => (
                        <Link
                          key={country.id}
                          to={`/encyclopedia/${country.id}`}
                          className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                          onClick={() => {
                            setShowCountryDropdown(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Contact Us
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
