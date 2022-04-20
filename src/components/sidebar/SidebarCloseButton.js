import React from 'react';

const SidebarCloseButton = props => {
  return (
    <button onClick={props.onClick}>
      <img
        src="./assets/sidebar-close-button.png"
        alt="Sidebar Close Button"
      ></img>
    </button>
  );
};

export default SidebarCloseButton;
