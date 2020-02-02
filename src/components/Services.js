import React from 'react';

const ServicesNPortfolio = ({ scrollPosition }) => {
  return (
    <div className="">
      <div id="services">
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div id="services-items">
                <div
                  id="services-items-text"
                  className={scrollPosition > 250 ? `animated slideInLeft` : ''}
                >
                  <h2>
                    Services
                    <br />& Portfolio
                  </h2>
                </div>

                <div className="row">
                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInLeft' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInLeft' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInLeft' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInRight' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInRight' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col s12 m4 ${
                      scrollPosition > 258 ? 'animated slideInRight' : ''
                    }`}
                  >
                    <div id="inner-services">
                      <div>
                        <i className="material-icons">computer</i>
                      </div>
                      <div>
                        <p>Web Design</p>
                        <p>
                          Modern web design services with new trends and
                          direction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNPortfolio;
