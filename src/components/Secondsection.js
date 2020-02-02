import React from 'react';
import CREATIVE_AGENCY from '../assets/creativeagencytext.png';
import CREATIVE from '../assets/creative.png';
import GUY from '../assets/guy.png';

const SecondSection = () => {
  return (
    <div className="second-section-container">
      <div className="row">
        <div className="col s2">
          <img src={CREATIVE} alt="creative agency" id="creative" />
        </div>
        <div className="col s4 animated slideInLeft">
          <div className="section-left">
            <div style={{ display: 'grid', marginTop: '20%' }}>
              <img
                src={CREATIVE_AGENCY}
                alt="creative agency"
                id="creative_agency"
                className="left"
              />
              <div id="play_section">
                <div id="play_button" className="pulse">
                  <i className="material-icons">play_arrow</i>
                </div>
                <p>Watch a video intro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="section-right">
            <img src={GUY} alt="guy" id="guy" />
            <div className="img-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
