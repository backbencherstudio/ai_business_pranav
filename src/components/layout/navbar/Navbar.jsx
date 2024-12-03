import "./navbar.scss";
import { NavLink } from "react-router-dom";
import appLogo from "../../../assets/image/applogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img className="appLogo" src={appLogo} alt="App Logo" />
      </NavLink>

      <div className="middle-section">
        <NavLink
          to="#home"
          className="nav-link"
          activeClassName="active"
        >
          :HOME
        </NavLink>
        <NavLink
          to="#about"
          className="nav-link"
          activeClassName="active"
        >
          :ABOUT
        </NavLink>
        <NavLink
          to="#services"
          className="nav-link"
          activeClassName="active"
        >
          :SERVICES
        </NavLink>
        <NavLink
          to="#contact"
          className="nav-link"
          activeClassName="active"
        >
          :CONTACT
        </NavLink>
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
