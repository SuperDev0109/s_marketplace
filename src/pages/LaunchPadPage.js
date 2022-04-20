import React from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import ConnectWalletButton from '../components/header/ConnectWalletButton';
import TokenStatusPortal from '../components/common/TokenStatusPortal';
import './LaunchPadPage.scss';
const LaunchPadPage = () => {
  return (
    <div className="launchpadpage">
      <Page title="Launchpad" description="Create your launches with ease.">
        <PagePortal>
          <div className="pageportal-title">
            The Fully Decentralized Launchpad On BSC Smart Chain Testnet
          </div>
          <ConnectWalletButton></ConnectWalletButton>
        </PagePortal>
        <div className="pageportal-tokenstatusportal-group">
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
        </div>
      </Page>
    </div>
  );
};

export default LaunchPadPage;
