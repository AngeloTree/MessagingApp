import React from "react";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MessageYou
      </a>
      <button className="hamburger">
        <MenuIcon />
      </button>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
