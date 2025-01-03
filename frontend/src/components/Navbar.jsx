import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user state and localStorage
    navigate("/login"); // Redirect to login page
  };
  console.log("User object in Navbar:", user);

  return (
    <nav className="sticky top-0 bg-[#181818] text-[#E5CBBE] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Room Designer</Link>
        </div>

        {/* Middle: User Info or Login */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              Hello, {user?.name?.split(" ")[0] || "Guest"}
              <button
                className="text-lg border border-[#E5CBBE] px-4 py-2 rounded-[12px] hover:text-[#A58077] hover:border-[#A58077] hover:bg-[#E5CBBE] transition-all"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-lg border border-[#E5CBBE] px-4 py-2 rounded-[12px] hover:text-[#A58077] hover:border-[#A58077] hover:bg-[#E5CBBE] transition-all"
            >
              Login
            </Link>
          )}
        </div>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-lg hover:text-[#A58077] transition-all">
            Home
          </Link>
          <Link
            to="/products"
            className="text-lg hover:text-[#A58077] transition-all"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-lg hover:text-[#A58077] transition-all"
          >
            Cart
          </Link>
          <Link
            to="/ai"
            className="text-lg hover:text-[#A58077] transition-all"
          >
            AI
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
