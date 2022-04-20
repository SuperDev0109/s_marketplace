import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
} from '../actions/types';
const initialState = {
  isOpened: false,
  isVisible: false,
};

function sidebarReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case OPEN_SIDEBAR:
      return { ...state, isOpened: true };
    case CLOSE_SIDEBAR:
      return { ...state, isOpened: false };
    case SHOW_SIDEBAR:
      return { ...state, isVisible: true };
    case HIDE_SIDEBAR:
      return { ...state, isVisible: false };
    default:
      return state;
  }
}

export default sidebarReducer;
