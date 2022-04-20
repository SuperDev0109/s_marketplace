import React from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import PagePortalStatus from '../components/common/PagePortalStatus';
import LineInput from '../components/common/LineInput';
import Button from '../components/common/Button';
import LockerStatusPortal from '../components/common/LockerStatusPortal';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import './LockerPage.scss';
const LockerPage = () => {
  const tabSelectStyle = {
    color: '#002868',
    background: 'rgba(0, 40, 104, 0.1)',
    borderRadius: '10px',
  };
  return (
    <div className="lockerpage">
      <Page title="Lockers" description="Create Or Manage Lockers">
        <PagePortal>
          <PagePortalStatus
            number="2"
            unit="Lockers"
            description="Create Or Manage Lockers"
          ></PagePortalStatus>
          <Tabs variant="unstyled" align="center">
            <TabList>
              <Tab _selected={tabSelectStyle}>Lock Token</Tab>
              <Tab _selected={tabSelectStyle}>Lock Liquidity</Tab>
              <Tab _selected={tabSelectStyle}>View All Lockers</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="locktoken">
                  <div className="locktoken-content">
                    <div className="locktoken-input">
                      <LineInput placeholder="Enter Token Address"></LineInput>
                      <div className="locktoken-input-description">
                        Token Locker Fees: 0.35 BNB (Flat Rate)
                      </div>
                    </div>
                    <div className="locktoken-instruction">
                      <div className="locktoken-instruction-title">
                        CrowFi Token Locker:
                      </div>
                      <div className="locktoken-instruction-description">
                        - Use the CrowFi Token Locker to lock your tokens and
                        earn greater trust within your community!
                      </div>
                    </div>
                  </div>
                  <Button padding="11px 30px">Create Locker</Button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="lockliquidity">
                  <div className="lockliquidity-content">
                    <div className="lockliquidity-instruction">
                      <div className="lockliquidity-instruction-title">
                        CrowFi Liquidity Locker:
                      </div>
                      <div className="lockliquidity-instruction-description">
                        - Use the CrowFi Locker Liquidity Locker to lock your LP
                        tokens to show your investors proof of locked liquidity!
                      </div>
                    </div>
                    <div className="lockliquidity-input">
                      <LineInput placeholder="Enter Token Address"></LineInput>
                      <div className="lockliquidity-input-description">
                        Token Locker Fees: 0.35 BNB (Flat Rate)
                      </div>
                    </div>
                  </div>
                  <Button padding="11px 30px">Create Locker</Button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="viewalllockers">
                  <LineInput placeholder="Search by Token Adress, name or symbol"></LineInput>
                  <Button padding="15px 36px">Search</Button>
                  <div className="viewalllockers-lockerstatusportal-group">
                    <LockerStatusPortal></LockerStatusPortal>
                    <LockerStatusPortal></LockerStatusPortal>
                    <LockerStatusPortal></LockerStatusPortal>
                    <LockerStatusPortal></LockerStatusPortal>
                    <LockerStatusPortal></LockerStatusPortal>
                    <LockerStatusPortal></LockerStatusPortal>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PagePortal>
      </Page>
    </div>
  );
};

export default LockerPage;
