import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarMenuItem.scss';

const SidebarMenuItem = props => {
  return (
    <div className="sidebarmenuitem">
      <NavLink to={props.to}>{props.title}</NavLink>
    </div>
  );
};

export default SidebarMenuItem;
