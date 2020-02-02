import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact-us">
      <div className="container">
        <div id="contact-us-section">
          <div className="center">
            <h6 style={{ color: '#CBD5F9' }}>Contact Us</h6>
          </div>
          <div className="center">
            <h5 style={{ color: '#502EFF' }}>
              Have an awesome idea in mind?
              <br />
              we would love to hear
            </h5>
          </div>
          <div className="contact-form">
            <div className="row">
              <div id="contact-inner" className="center">
                <div className="col s12 m8">
                  <input
                    type="text"
                    id="contact-input"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="col s12 m3">
                  <input
                    type="submit"
                    id="contact-input-submit"
                    className="btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
