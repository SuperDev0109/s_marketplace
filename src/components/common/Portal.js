import React from 'react';
import './Portal.scss';
const Portal = props => {
  return (
    <div>
      <div className="crow-portal-title">{props.title}</div>
      <div className="crow-portal-description">{props.description}</div>
    </div>
  );
};

export default Portal;
