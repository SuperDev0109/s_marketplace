import React from 'react';
import PortalWithBadge from '../common/PortalWithBadge';
import './LockerPortal.scss';
const LockerPortal = () => {
  return (
    <div className="lockerportal">
      <PortalWithBadge
        badgeNumber="10"
        badgeDescription="Lockers made."
        title="Lockers"
        description={
          <>Lockers is our Locking Dapp for Liquidity / Token locking</>
        }
      ></PortalWithBadge>
    </div>
  );
};

export default LockerPortal;
