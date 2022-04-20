import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
} from './types';

export const openSidebar = () => dispatch => {
  dispatch({ type: OPEN_SIDEBAR });
  dispatch({ type: SHOW_SIDEBAR });
};
export const closeSidebar = () => dispatch => {
  dispatch({ type: CLOSE_SIDEBAR });
  setTimeout(() => dispatch({ type: HIDE_SIDEBAR }), 500);
};
