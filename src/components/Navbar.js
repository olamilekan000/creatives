import React, { useEffect, useState } from 'react';
import LOGO from '../assets/Logo.png';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = e => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className="transparent">
      <div
        className={`nav-wrapper ${
          scrollPosition < 150 ? '' : 'white animated bounce'
        } z-depth-0`}
      >
        <div className="container">
          <div>
            <div className="brand-logo">
              <img src={LOGO} alt="logo" />
            </div>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <div id="nav-list-flex">
                <div id="first-li">
                  <li>
                    <a href="/#">Home</a>
                  </li>
                  <li>
                    <a href="/#">Services</a>
                  </li>
                  <li>
                    <a href="/#">Project</a>
                  </li>
                  <li>
                    <a href="/#">about us</a>
                  </li>
                  <li>
                    <a href="/#">contact</a>
                  </li>
                </div>

                <button id="nav-btn">My Projects</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
