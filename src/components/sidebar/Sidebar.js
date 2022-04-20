import React from 'react';
import SidebarCloseButton from './SidebarCloseButton';
import SidebarMenuItem from './SidebarMenuItem';
import './Sidebar.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeSidebar } from '../../actions/sidebar';

const Sidebar = ({ isOpened, isVisible, closeSidebar }) => {
  const handleMouseDown = e => {
    if (e.clientX > 264) closeSidebar();
  };
  const handleCloseButtonClick = () => {
    closeSidebar();
  };
  return (
    <div
      className={!isOpened ? 'sidebar-wrapper' : 'sidebar-wrapper active'}
      style={{ zIndex: isVisible ? 2 : -1 }}
      onMouseDown={handleMouseDown}
    >
      <div className={!isOpened ? 'sidebar' : 'sidebar active'}>
        <div className="sidebar-header">
          <div className="sidebar-header-wrapper">
            <div className="sidebar-header-left">
              <div className="sidebar-header-logo-image">
                <img
                  src="./assets/header-logo-white.png"
                  alt="Header Logo"
                ></img>
              </div>
              <div className="sidebar-header-logo-text">CrowFi</div>
            </div>
            <div className="sidebar-header-right">
              <SidebarCloseButton
                onClick={handleCloseButtonClick}
              ></SidebarCloseButton>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <SidebarMenuItem title="Home" to="/"></SidebarMenuItem>
          <SidebarMenuItem
            title="Token Factory"
            to="/tokenfactory"
          ></SidebarMenuItem>
          <SidebarMenuItem title="Launchpad" to="/launchpad"></SidebarMenuItem>
          <SidebarMenuItem
            title="Airdropper"
            to="/airdropper"
          ></SidebarMenuItem>
          <SidebarMenuItem title="Lockers" to="/locker"></SidebarMenuItem>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isOpened: state.sidebar.isOpened,
  isVisible: state.sidebar.isVisible,
});
export default connect(mapStateToProps, { closeSidebar })(Sidebar);
