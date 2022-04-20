import React from 'react';
import LaunchPadPortal from '../components/homepage/LaunchPadPortal';
import TokenCreatorPortal from '../components/homepage/TokenCreatorPortal';
import PresalePortal from '../components/homepage/PresalePortal';
import LockerPortal from '../components/homepage/LockerPortal';
import AirdropperPortal from '../components/homepage/AirdropperPortal';
import './HomePage.scss';
const HomePage = () => {
  return (
    <div className="container-fluid homepage-container">
      <LaunchPadPortal></LaunchPadPortal>
      <TokenCreatorPortal></TokenCreatorPortal>
      <PresalePortal></PresalePortal>
      <LockerPortal></LockerPortal>
      <AirdropperPortal></AirdropperPortal>
    </div>
  );
};

export default HomePage;
