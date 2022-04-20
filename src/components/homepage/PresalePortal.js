import React from 'react';
import PortalWithBadge from '../common/PortalWithBadge';
import './PresalePortal.scss';
const PresalePortal = () => {
  return (
    <div className="presaleportal">
      <PortalWithBadge
        badgeNumber="40"
        badgeDescription="Pre-sales Created."
        title="Pre-sale Marketplace"
        description={
          <>
            Market Place is an open, decentralized platform for token Presales.
            <br></br>
            Create Presales in seconds with a simple decentralized form.
          </>
        }
      ></PortalWithBadge>
    </div>
  );
};

export default PresalePortal;
