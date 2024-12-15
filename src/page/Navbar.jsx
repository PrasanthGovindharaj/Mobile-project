import React, { useState, useEffect } from "react";
import "./navbar.css";
import data from "../data/navbar.json";
import image1 from "../image/image1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navConfig = data[0];

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} ${
        isMenuOpen ? "showMenu" : ""
      }`}
    >
      <nav className="navbar">
        <img className="logo-text" src={image1} alt="Logo" />
        <i
          className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}
          aria-label={isMenuOpen ? "close" : "open"}
          onClick={toggleMenu}
        ></i>
        <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          {navConfig.menu_items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
