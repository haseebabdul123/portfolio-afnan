import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import './style/global.css'
const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <FaHome className="nav-icon" onClick={() => setPage("home")} />
      <FaUser className="nav-icon" onClick={() => setPage("about")} />
    </div>
  );
};

export default Navbar;
