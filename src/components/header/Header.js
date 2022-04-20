import React, { useEffect, useState } from 'react';
import HeaderToggleButton from './HeaderToggleButton';
import ConnectWalletButton from './ConnectWalletButton';
import './Header.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../actions/sidebar';
import { connect as connectWallet } from '../../actions/blockchain';

const Header = ({ openSidebar }) => {
  const [offset, setOffset] = useState(window.pageYOffset);
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleToggleButtonClick = e => {
    openSidebar();
  };
  const handleConnectWalletButtonClick = e => {
    if (blockchain.loading || blockchain.account) return;
    e.preventDefault();
    dispatch(connectWallet());
  };
  return (
    <div className={offset > 30 ? 'crow-header active' : 'crow-header'}>
      <div className="crow-header-left">
        <div className="crow-header-toggle-button">
          <HeaderToggleButton
            onClick={handleToggleButtonClick}
          ></HeaderToggleButton>
        </div>
        <div className="crow-header-logo">
          <div className="crow-header-logo-icon">
            <img src="./assets/header-logo-black.png" alt="Header Logo"></img>
          </div>
          <div className="crow-header-logo-text">CrowFi</div>
        </div>
      </div>
      <div className="crow-header-right">
        <ConnectWalletButton onClick={handleConnectWalletButtonClick}>
          {blockchain.loading
            ? 'Loading...'
            : blockchain.account
            ? blockchain.account.slice(0, 5) +
              '...' +
              blockchain.account.slice(-4)
            : 'Connect Wallet'}
        </ConnectWalletButton>
        {blockchain.errorMsg ? (
          <div className="crow-header-error">{blockchain.errorMsg}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default connect(null, { openSidebar })(Header);
