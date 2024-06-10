import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import goodtravels from "../../assets/images/goodtravels.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    
      <nav className="bg-blue-500 text-white py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={goodtravels} alt="Goodday Logo" className="h-8 mr-2" />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="md:hidden opacity-50 hover:opacity-100"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <ul
            className={`${
              menuOpen
                ? "block fixed top-14 left-0 right-0 bg-blue-400 z-10 transition-all duration-300"
                : "hidden"
            } md:flex space-x-2 md:space-x-4 md:relative w-full md:w-auto md:bg-transparent mt-4 md:mt-0 p-4 md:p-0 items-center justify-center text-xs md:text-sm`}
          >
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Holidays
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                My trips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
