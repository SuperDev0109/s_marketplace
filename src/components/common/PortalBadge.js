import React from 'react';
import './PortalBadge.scss';

const PortalBadge = props => {
  return (
    <div className="crow-portalbadge">
      <div className="crow-portalbadge-number">{props.number}</div>
      <div className="crow-portalbadge-description">{props.description}</div>
    </div>
  );
};

export default PortalBadge;
