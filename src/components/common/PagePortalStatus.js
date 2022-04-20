import React from 'react';
import './PagePortalStatus.scss';
const PagePortalStatus = props => {
  return (
    <div className="pageportalstatus">
      <div className="pageportalstatus-number">{props.number}</div>
      <div className="pageportalstatus-unit">{props.unit}</div>
      <div className="pageportalstatus-description">{props.description}</div>
    </div>
  );
};

export default PagePortalStatus;
