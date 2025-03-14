import React, { useState } from 'react';
import './headfoot.css'; // Assuming you will create a CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../images/hackies-logo.png'; // Import the logo image

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleNavTriggerClick = () => {
    setIsActive(!isActive);
    console.log("Clicked menu");
    setShowList(!showList);
  };

  return (
    <nav className={`nav ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="#">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <div id="mainListDiv" className={`main_list ${showList ? 'show_list' : ''}`}>
          <ul className="navlinks">
            <li>
              <Link to="">Eonverse</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="#">Tech Stack</Link>
            </li>
            <li>
              <Link to="">Demo</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li className="signin-btn">
              <Link to="/signin">Sign In</Link> {/* Link to your sign-in page */}
            </li>
          </ul>
        </div>
        <span className="navTrigger" onClick={handleNavTriggerClick}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
