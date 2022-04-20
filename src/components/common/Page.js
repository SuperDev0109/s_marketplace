import React from 'react';
import './Page.scss';
const Page = props => {
  return (
    <div className="crow-page">
      <div className="crow-page-header">
        <div className="crow-page-header-title">{props.title}</div>
        <div className="crow-page-header-description">{props.description}</div>
      </div>
      <div className="crow-page-content">{props.children}</div>
    </div>
  );
};

export default Page;
