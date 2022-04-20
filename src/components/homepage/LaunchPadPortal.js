import React from 'react';
import Button from '../common/Button';
import Portal from '../common/Portal';
import './LaunchPadPortal.scss';
const LaunchPadPortal = () => {
  return (
    <div className="launchpadportal-container">
      <Portal
        title="The Launchpad Protocol for You!"
        description={
          <>
            CrowFi Launchpad helps everyone to create their own tokens and token
            sales in few seconds.<br></br>Tokens created here will be verified
            and published on explorer websites.
          </>
        }
      ></Portal>
      <div className="launchpadportal-button-wrapper">
        <Button>Create Now</Button>
      </div>
    </div>
  );
};

export default LaunchPadPortal;
