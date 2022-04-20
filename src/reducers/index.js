import { combineReducers } from 'redux';
import sidebar from './sidebar';
import blockchain from './blockchain';
import data from './data';
export default combineReducers({ sidebar, blockchain, data });
