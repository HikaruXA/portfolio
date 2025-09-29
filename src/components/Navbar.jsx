import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items without "graduation"
  const navItems = ["home", "contact", "projects", "blogs"];

  return (
    <nav className="bg-[#28009E] text-white py-4 px-4 sm:px-6 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm sm:text-base font-bold">RomeFC</div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  `relative pb-1 transition-all hover:text-gray-200 ${
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  } after:transition-transform after:duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-white after:w-full after:origin-left`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="px-2 py-2 space-y-1">
          {navItems.map((item) => (
            <div key={item} className="inline-block">
              <NavLink
                to={item === "home" ? "/" : `/${item}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `inline-block px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-gray-200 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  } after:transition-transform after:duration-300 after:absolute after:left-3 after:bottom-1 after:h-[2px] after:bg-white after:w-[calc(100%-1.5rem)] after:origin-left`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
