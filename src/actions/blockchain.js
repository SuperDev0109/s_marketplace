// constants
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import SmartContract from '../contracts/MCFSimpleFactory.sol/MCFSimpleFactory.json';

const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  };
};

const connectSuccess = payload => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  };
};

const connectFailed = payload => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  };
};

const updateAccountRequest = payload => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  };
};

export const connect = () => {
  console.log('--:');
  return async dispatch => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        const networkId = await ethereum.request({
          method: 'net_version',
        });
        // const NetworkData = await SmartContract.networks[networkId];
        if (networkId == 338) {
          // IMPORTANT. ONCE YOUR CONTRACT IS ON THE MAIN NET, SWITCH THIS NUMBER TO 1.
          const SmartContractObj = new Web3EthContract(
            SmartContract.abi,
            '0x14dDb249c6CfDC957A6B2108902C6F2996D79cDe' // **IMPORTANT** PASTE CONTRACT ADDRESS HERE
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on('accountsChanged', accounts => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed('Change network to Cronos TestNet.'));
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong.'));
      }
    } else {
      dispatch(connectFailed('Please install Metamask.'));
    }
  };
};

export const updateAccount = account => {
  return async dispatch => {
    dispatch(updateAccountRequest({ account: account }));
    //dispatch(fetchData(account));
  };
};
