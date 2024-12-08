import "./navbar.scss";
import { NavLink } from "react-router-dom";
import appLogo from "../../../assets/image/applogo.png";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img className="appLogo" src={appLogo} alt="App Logo" />
      </NavLink>

      <div className="middle-section">
        {["home", "about", "services", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${activeLink === section ? "active" : ""}`}
          >
            {activeLink === section && <span className="bracket">[</span>}
            :{section.toUpperCase()}
            {activeLink === section && <span className="bracket">]</span>}
          </a>
        ))}
      </div>



      <div className="button-container">
        <button className="corner-button">
          <span>Test Button</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
