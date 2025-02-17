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
  const [offers, setOffers] = useState([
    {
      id: "treks-and-hikes",
      name: "Treks and Hikes",
    },
    {
      id: "pilgrimage-tours",
      name: "Pilgrimage Tours",
    },
    {
      id: "international-tours",
      name: "International Tours",
    },
    {
      id: "india-inbound-domestic-tours",
      name: "India Inbound/Domestic Tours",
    },
  ]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);

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
      {/* <div className="bg-white w-full absolute top-0 z-50 h-7 flex items-center">
        <div className="mx-auto px-2 sm:px-4 lg:px-16 w-full h-6 flex items-center">
          <p className="text-[12px] font-bold text-indigo-600 leading-none">
            Welcome to Apollo Expeditions
          </p>
        </div>
      </div> */}
      <nav className="bg-transparent absolute w-full top-0 z-50">
        <div className="max-w-10xl mx-auto px-0 sm:px-6">
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
            <div className="hidden lg:flex px-3 bg-gray-900/30 rounded-3xl lg:items-center md:flex space-x-4 lg:space-x-8">
              <div>
                <Link
                  to="/"
                  className="text-white text-[15px] hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </div>
              <div className="relative group">
                <button
                  onClick={() => setShowOffersDropdown(!showOffersDropdown)}
                  className="text-white text-[15px] hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Offers & Packages
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
                <div className="absolute -left-3 mt-0 w-40 h-48 rounded-md shadow-lg bg-white overflow-hidden hidden group-hover:block">
                  <div className="py-1" role="menu">
                    <div className="max-h-48 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                      {offers.map((offer) => (
                        <Link
                          key={offer.id}
                          to={`/${offer.id}`}
                          className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                          role="menuitem"
                        >
                          {offer.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to="/vlogs"
                  className="text-white text-[15px] hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Our Vlogs
                </Link>
              </div>
              <div className="relative group">
                <button className="text-white text-[15px] hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
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
                <div className="absolute -left-3 mt-0 w-40 h-48 rounded-md shadow-lg bg-white overflow-hidden hidden group-hover:block">
                  <div className="py-1" role="menu">
                    <div className="max-h-48 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                      {countries.map((country) => (
                        <Link
                          key={country.id}
                          to={`/encyclopedia/${country.id}`}
                          className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                          role="menuitem"
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="text-white text-[15px] hover:text-indigo-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
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
                <div className="relative">
                  <button
                    onClick={() => setShowOffersDropdown(!showOffersDropdown)}
                    className="w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
                  >
                    Offers & Packages
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
                  {showOffersDropdown && (
                    <div className="pl-4">
                      <div className="max-h-48 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                        {offers.map((offer) => (
                          <Link
                            key={offer.id}
                            to={`/${offer.id}`}
                            className="block text-gray-700 hover:text-indigo-600 overflow-hidden hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => {
                              setShowOffersDropdown(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {offer.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                      <div className="max-h-48 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                        {countries.map((country) => (
                          <Link
                            key={country.id}
                            to={`/encyclopedia/${country.id}`}
                            className="block text-gray-700 hover:text-indigo-600 overflow-hidden hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => {
                              setShowCountryDropdown(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {country.name}
                          </Link>
                        ))}
                      </div>
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