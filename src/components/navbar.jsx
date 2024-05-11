import React from "react";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Logo</h1>
      <ul className="menu-list">
        <li>Menu</li>
        <li>Career</li>
      </ul>
    </nav>
  );
}

export default Navbar;
