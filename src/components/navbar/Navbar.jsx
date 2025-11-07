import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Laptop", path: "/laptops" },
    { name: "Desktop", path: "/desktops" },
    { name: "Accessories", path: "/accessories" },
    { name: "Hot Discounts", path: "/discounts" },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        {/* --- Left Section: Brand & Menu Button --- */}
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <span className="text-lg font-bold text-gray-600">TechPlug</span>
        </div>

        {/* --- Desktop Links --- */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map(({ name, path}) => (
            <NavLink
              key={name}
              to={path}
              end
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* --- Cart --- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-black" />
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <span className="text-sm font-medium mt-1 text-gray-800">Cart</span>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d0f16] text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-green-700 mt-5">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 mt-8 px-4">
          {navLinks.map(({ name, path, icon }) => (
            <NavLink
              key={name}
              to={path}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive ? "text-red-500 border-b-2 border-red-500 pb-1" : "hover:text-red-400"
                }`
              }
            >
              {name} {icon}
            </NavLink>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};
