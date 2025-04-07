import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/logo_transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Adjust the scroll position threshold if needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      // Check for mobile screen width
      setIsOpen(false); // Close the navbar when a link is clicked on mobile
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-clean text-primary" : "bg-transparent text-black"
      } backdrop-blur-[3px]`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="AV Prime Realty Logo" />
        </NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-clean md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 hover:text-gray-600 transition ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 hover:text-gray-600 transition ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 hover:text-gray-600 transition ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 hover:text-gray-600 transition ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
