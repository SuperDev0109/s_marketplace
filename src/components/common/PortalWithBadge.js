import React from 'react';
import Portal from './Portal';
import PortalBadge from './PortalBadge';
import './PortalWithBadge.scss';
const PortalWithBadge = props => {
  return (
    <div>
      <div className="portalbadge-wrapper">
        <PortalBadge
          number={props.badgeNumber}
          description={props.badgeDescription}
        ></PortalBadge>
      </div>
      <Portal title={props.title} description={props.description}></Portal>
    </div>
  );
};

export default PortalWithBadge;
