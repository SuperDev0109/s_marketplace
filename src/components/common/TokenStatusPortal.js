import React from 'react';
import './TokenStatusPortal.scss';
const TokenStatusPortal = () => {
  return (
    <div className="tokenstatusportal">
      <div className="tokenstatusportal-header">
        <div className="tokenstatusportal-header-left">
          <div className="tokenstatusportal-header-logo">
            <img
              src="./assets/header-logo-black-small.png"
              alt="Header Logo"
            ></img>
          </div>
          <div className="tokenstatusportal-header-token">
            <div className="tokenstatusportal-header-token-title">CROW</div>
            <div className="tokenstatusportal-header-token-description">
              CROW
            </div>
          </div>
        </div>
        <div className="tokenstatusportal-header-right">Presale success</div>
      </div>
      <div className="tokenstatusportal-content">
        <div className="tokenstatusportal-content-percent-circle">100%</div>
        <div className="tokenstatusportal-content-percent-line"></div>
        <div className="tokenstatusportal-content-raised-softcap">
          Raised: 2/2 <br></br> Soft Cap: 1BNB
        </div>
        <div className="tokenstatusportal-content-max">Max: 2 BNB</div>
        <div className="tokenstatusportal-content-presale-status">
          Presale<br></br>Ended
        </div>
      </div>
    </div>
  );
};

export default TokenStatusPortal;
