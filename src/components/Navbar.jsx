import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "/assets/pngegg.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleNavLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="fade-in">
      <div className="logo">
        <img width="50px" src={logo} alt="Logo" />
      </div>

      <nav className={isNavVisible ? "visible slide-down" : ""}>
        <ul>
          <li>
            <a href="#home" onClick={handleNavLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavLinkClick}>
              Contacts
            </a>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "var(--headerTextColor)",
          }}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </nav>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button
  className="hamburger"
  onClick={toggleNav}
  aria-label="Toggle navigation"
>
  {isNavVisible ? "✕" : "☰"}
</button>

      </div>
    </header>
  );
}

export default Navbar;
