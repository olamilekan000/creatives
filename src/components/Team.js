import React from 'react';

const Team = ({ scrollPosition }) => {
  return (
    <div id="teams">
      <div className="row">
        <div
          className={`col s12 ${
            scrollPosition > 1100 ? 'animated rubberBand' : ''
          }`}
        >
          <p className="center" style={{ color: '#BEBEBE' }}>
            Meet The Team
          </p>
          <h6
            className="center"
            style={{
              width: '35%',
              margin: 'auto',
              color: '#502EFF',
              fontSize: '2rem'
            }}
            id="great"
          >
            great outcome always relay on the great foundation
          </h6>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className={`col s12 m4 guy_in_red ${
              scrollPosition > 1100 ? 'animated slideInLeft' : ''
            }`}
          >
            <div id="guy_in_red"></div>
            <div className="center">
              <h6 style={{ color: '#502EFF' }}>Jam Patrick</h6>
              <p style={{ color: '#BEBEBE', width: '60%', margin: 'auto' }}>
                Standard screen generation and design for all
              </p>
              <div id="social-icons">
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

          <div
            className={`col s12 m4 girl_in_middle ${
              scrollPosition > 1100 ? 'animated slideInUp' : ''
            }`}
          >
            <div id="girl_in_middle"></div>
            <div className="center">
              <h6 style={{ color: '#502EFF' }}>Jam Patrick</h6>
              <p style={{ color: '#BEBEBE', width: '60%', margin: 'auto' }}>
                Standard screen generation and design for all
              </p>
              <div id="social-icons">
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

          <div
            className={`col s12 m4 guy_in_hat ${
              scrollPosition > 1100 ? 'animated slideInRight' : ''
            }`}
          >
            <div id="guy_in_hat"></div>
            <div className="center">
              <h6 style={{ color: '#502EFF' }}>Jam Patrick</h6>
              <p style={{ color: '#BEBEBE', width: '60%', margin: 'auto' }}>
                Standard screen generation and design for all
              </p>
              <div id="social-icons">
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
    </div>
  );
};

export default Team;
