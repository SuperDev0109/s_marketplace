import React from 'react';
import './LockerStatusPortal.scss';

const LockerStatusPortal = () => {
  return (
    <div className="lockerstatusportal">
      <div className="lockerstatusportal-title">
        Crow
        <br />
        Finance
      </div>
      <div className="lockerstatusportal-ends">Ends: 02/26/2022</div>
      <div className="lockerstatusportal-timeleft">
        <div className="lockerstatusportal-timeleft-item">
          <div className="lockerstatusportal-timeleft-item-number">06</div>
          <div className="lockerstatusportal-timeleft-item-unit">Days</div>
        </div>
        <div className="lockerstatusportal-timeleft-item">
          <div className="lockerstatusportal-timeleft-item-number">16</div>
          <div className="lockerstatusportal-timeleft-item-unit">Hours</div>
        </div>
        <div className="lockerstatusportal-timeleft-item">
          <div className="lockerstatusportal-timeleft-item-number">24</div>
          <div className="lockerstatusportal-timeleft-item-unit">Minutes</div>
        </div>
        <div className="lockerstatusportal-timeleft-item">
          <div className="lockerstatusportal-timeleft-item-number">06</div>
          <div className="lockerstatusportal-timeleft-item-unit">Seconds</div>
        </div>
      </div>
      <div className="lockerstatusportal-description">
        <div className="lockerstatusportal-description-title">Amount</div>
        <div className="lockerstatusportal-description-number">
          269054686486.3518
        </div>
      </div>
      <div className="lockerstatusportal-description">
        <div className="lockerstatusportal-description-title">
          Token Address
        </div>
        <div className="lockerstatusportal-description-number">
          0x3ba9...129845
        </div>
      </div>
      <div className="lockerstatusportal-description">
        <div className="lockerstatusportal-description-title">
          Locker Owner Address
        </div>
        <div className="lockerstatusportal-description-number">
          0x3ba9...129845
        </div>
      </div>
    </div>
  );
};

export default LockerStatusPortal;
