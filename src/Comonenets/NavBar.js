import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import IntroSection from './IntoSection';
import FeaturesComponent from './FeaturesComponent';
import HowItWorks from './HowItWorks';
import MotivationalQuote from './MotivationalQuote ';
import DownloadApp from './DownloadApp';
import FAQComponent from './FAQComponent';
import FooterComponent from './FooterComponent';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <React.Fragment>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://www.pngplay.com/wp-content/uploads/6/Agriculture-Logo-Clipart-PNG.png"
              alt="AgriPredict Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-green-600"
            />
            <span className="text-2xl font-bold text-green-600">AgroAI</span>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              title="mobile"
              id="nav-toggle"
              className="text-green-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul id="nav-menu" className="hidden md:flex space-x-8 items-center">
            <li>
              <Link
                to="/features"
                className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Download App
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
              >
                 LoginToAgronomist
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } md:hidden transition-opacity duration-500 ease-in-out`}
        >
          <ul className="bg-white shadow-lg flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                to="/features"
                className="text-gray-600 hover:text-green-600"
                onClick={toggleMobileMenu} // Close mobile menu on link click
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-green-600"
                onClick={toggleMobileMenu}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-green-600"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                className="bg-green-600 text-white px-6 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                Download App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <IntroSection />
      <FeaturesComponent />
      <HowItWorks />
      <MotivationalQuote />
      <DownloadApp />
      <FAQComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

export default NavBar;
