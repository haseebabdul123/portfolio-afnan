import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./style/global.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-icon">
        <FaHome />
      </Link>
      <Link to="/about" className="nav-icon">
        <FaUser />
      </Link>
    </div>
  );
};

export default Navbar;
