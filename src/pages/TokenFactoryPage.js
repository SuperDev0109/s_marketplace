import React, { useState } from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import PagePortalStatus from '../components/common/PagePortalStatus';
import LineInput from '../components/common/LineInput';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Select from 'react-select';

import './TokenFactoryPage.scss';
const TokenFactoryPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);

  const [option, setOption] = useState({ value: 1, label: 'Standard Token' });
  const [tokenFormData, setTokenFormData] = useState({
    tokenName: '',
    tokenSymbol: '',
    tokenDecimal: '',
    tokenTotalSupply: '',
  });
  const [liquidityTokenFormData, setLiquidityTokenFormData] = useState({
    liquidityTokenName: '',
    liquidityTokenSymbol: '',
    liquidityTokenDecimal: '',
    liquidityTokenSupply: '',
    liquidityTokenTxFeeYield: '',
    liquidityTokenTxFeeLiquidity: '',
  });

  const { tokenName, tokenSymbol, tokenDecimal, tokenTotalSupply } =
    tokenFormData;
  const handleTokenChange = e => {
    setTokenFormData({
      ...tokenFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleTokenSubmit = e => {
    const _amount = 1;
    blockchain.smartContract.methods
      .deployNewInstance(
        tokenName,
        tokenSymbol,
        tokenDecimal,
        tokenTotalSupply,
        '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        blockchain.account
      )
      .send({
        gasLimit: 285000 * _amount,
        to: '0x14dDb249c6CfDC957A6B2108902C6F2996D79cDe', // the address of your contract
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((1 * _amount).toString(), 'ether'),
      })
      .once('error', err => {})
      .then(receipt => {
        console.log(receipt);
      });
  };
  const {
    liquidityTokenName,
    liquidityTokenSymbol,
    liquidityTokenDecimal,
    liquidityTokenSupply,
    liquidityTokenTxFeeYield,
    liquidityTokenTxFeeLiquidity,
  } = liquidityTokenFormData;
  const handleLiquidityTokenFormChange = e => {
    setLiquidityTokenFormData({
      ...liquidityTokenFormData,
      [e.target.name]: e.target.value,
    });
  };
  const tabSelectStyle = {
    color: '#002868',
    background: 'rgba(0, 40, 104, 0.1)',
    borderRadius: '10px',
  };
  const options = [
    { value: 1, label: 'Standard Token' },
    { value: 2, label: 'Liquidity Generator Token' },
  ];
  const handleSelectChange = e => {
    setOption(e);
  };
  return (
    <div className="tokenfactorypage">
      <Page title="Token Factory" description="Create Or Manage Your Own Token">
        <PagePortal>
          <PagePortalStatus
            number="2"
            unit="Tokens"
            description="Created on BSC Smart Chain Testnet"
          ></PagePortalStatus>
          <Tabs variant="unstyled" align="center">
            <TabList>
              <Tab _selected={tabSelectStyle}>Create Token</Tab>
              <Tab _selected={tabSelectStyle}>Manage Tokens</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Select
                  maxWidth="462px"
                  marginTop="27px"
                  className="crow-select"
                  classNamePrefix="crow"
                  options={options}
                  value={option}
                  onChange={handleSelectChange}
                ></Select>
                {option.value === 1 ? (
                  <div className="createtoken">
                    <div className="createtoken-left">
                      <LineInput
                        placeholder="Token Name"
                        name="tokenName"
                        value={tokenName}
                        onChange={handleTokenChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Symbol"
                        name="tokenSymbol"
                        value={tokenSymbol}
                        onChange={handleTokenChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Decimal"
                        name="tokenDecimal"
                        value={tokenDecimal}
                        onChange={handleTokenChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Total Supply"
                        name="tokenTotalSupply"
                        value={tokenTotalSupply}
                        onChange={handleTokenChange}
                      ></LineInput>
                      <Button padding="11px 35px" onClick={handleTokenSubmit}>
                        Create
                      </Button>
                    </div>
                    <div className="createtoken-right">
                      <div className="createtoken-instruction-title">
                        Standard Token Features:
                      </div>
                      <div className="createtoken-instruction-description">
                        - Basic token with all standard features <br></br>-
                        Perfect for utility based projects such as charting
                        tools
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="createtoken">
                    <div className="createtoken-left">
                      <LineInput
                        placeholder="Token Name"
                        name="liquidityTokenName"
                        value={liquidityTokenName}
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Symbol"
                        name="liquidityTokenSymbol"
                        value={liquidityTokenSymbol}
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Decimal"
                        name="liquidityTokenDecimal"
                        value={liquidityTokenDecimal}
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Token Total Supply"
                        name="liquidityTokenSupply"
                        value={liquidityTokenSupply}
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Transaction Fee in % to generate yield"
                        name="liquidityTokenTxFeeYield"
                        value={liquidityTokenTxFeeYield}
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <LineInput
                        placeholder="Transaction Fee in % to generate Liquidity"
                        value={liquidityTokenTxFeeLiquidity}
                        name="liquidityTokenTxFeeYield"
                        onChange={handleLiquidityTokenFormChange}
                      ></LineInput>
                      <Button padding="11px 35px">Create</Button>
                    </div>
                    <div className="createtoken-right">
                      <div className="createtoken-instruction-title">
                        Liquidity Generator Token Features:
                      </div>
                      <div className="createtoken-instruction-description">
                        - Auto yield and liquidity generation (Safemoon Fork)
                        <br></br>- Customize fees taken to reward holders
                        <br></br>- Customize fees to generate liquidty<br></br>{' '}
                        - Whitelist functions
                      </div>
                    </div>
                  </div>
                )}
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PagePortal>
      </Page>
    </div>
  );
};

export default TokenFactoryPage;
