import React from 'react';

const HeaderToggleButton = props => {
  return (
    <button onClick={props.onClick}>
      <img
        src="./assets/header-toggle-button.png"
        alt="Header Toggle Button"
      ></img>
    </button>
  );
};

export default HeaderToggleButton;
