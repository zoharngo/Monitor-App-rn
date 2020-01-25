import { SHOW_MODAL, HIDE_MODAL } from "./last-visit-types";

const INITIAL_STATE = {
  show: false,
  messageBody: null
};

const lastVisitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        messageBody: action.payload
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default lastVisitReducer;
