import React from 'react';
import PortalWithBadge from '../common/PortalWithBadge';
import './TokenCreatorPortal.scss';
const TokenCreatorPortal = () => {
  return (
    <div className="tokencreatorportal">
      <PortalWithBadge
        badgeNumber="20"
        badgeDescription="Tokens Created."
        title="Create tokens with ease."
        description={
          <>
            Token Factory allows anyone to create tokens without any coding
            experience.<br></br>
            simple and cheap way, while being 100% decentralized!
          </>
        }
      ></PortalWithBadge>
    </div>
  );
};

export default TokenCreatorPortal;
