import {
  TRAPS_API_CALL_START,
  TRAPS_API_CALL_SUCCSES,
  TRAPS_API_CALL_FAILURE,
  SEARCH_TRAPS
} from "./traps-types";

const INITIAL_STATE = {
  traps: [],
  loading: false,
  searchTrapsText: ""
};

const trapsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAPS_API_CALL_START:
      return {
        ...state,
        loading: true
      };
    case TRAPS_API_CALL_SUCCSES:
      return {
        ...state,
        traps: action.payload,
        loading: false
      };

    case TRAPS_API_CALL_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case SEARCH_TRAPS:
      return {
        ...state,
        searchTrapsText: action.payload
      };
    default:
      return state;
  }
};

export default trapsReducer;
