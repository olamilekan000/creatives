import React from 'react';
import LOGO from '../assets/Logo.png';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <br />
        <div id="hr"></div>

        <div id="footer-content">
          <div>
            <div className="row">
              <div className="col s12 m3">
                <img src={LOGO} alt="logo" />

                <p>
                  A design agency shaping ideas into products. We help startups
                  and enterprises invent, build and launch their next project.
                </p>
              </div>

              <div className="col s12 m3">
                <h6
                  style={{
                    color: '#000964',
                    fontWeight: 'bold'
                  }}
                >
                  Services
                </h6>
                <ul>
                  <li>Web Design</li>
                  <li>App Design</li>
                  <li>Photography</li>
                  <li>Videography</li>
                </ul>
              </div>

              <div className="col s12 m3">
                <h6
                  style={{
                    color: '#000964',
                    fontWeight: 'bold'
                  }}
                >
                  Support
                </h6>
                <ul>
                  <li>Get Support</li>
                  <li>Contact</li>
                  <li>My blog</li>
                  <li>Privacy Policy</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div className="col s12 m3">
                <h6
                  style={{
                    color: '#000964',
                    fontWeight: 'bold'
                  }}
                >
                  Social
                </h6>
                <div id="social-icons-footer">
                  <img
                    src="https://img.icons8.com/material/24/000000/facebook-f.png"
                    alt="social"
                  />
                  <img
                    src="https://img.icons8.com/material/24/000000/twitter-squared.png"
                    alt="social"
                  />
                  <img
                    src="https://img.icons8.com/material/24/000000/linkedin.png"
                    alt="social"
                  />
                  <img
                    src="https://img.icons8.com/material/24/000000/discord-logo--v1.png"
                    alt="social"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="hr"></div>
      </div>
      <div className="center">
        <p style={{ color: '#502EFF' }}>
          &copy; frontendtest | All rights reserved 2020{' '}
          <a href="https://icons8.com/icon/86955/discord">
            Discord icon by Icons8
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
