import React from 'react';
import PortalWithBadge from '../common/PortalWithBadge';
import './AirdropperPortal.scss';
const AirdropperPortal = () => {
  return (
    <div className="airdropperportal">
      <PortalWithBadge
        badgeNumber="2"
        badgeDescription="Airdrops made."
        title="Airdropper"
        description={
          <>Lockers is our Locking Dapp for Liquidity / Token locking</>
        }
      ></PortalWithBadge>
    </div>
  );
};

export default AirdropperPortal;
