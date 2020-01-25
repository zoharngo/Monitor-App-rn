import {
  BLOCK_API_CALL_START,
  BLOCK_API_CALL_SUCCSES,
  BLOCK_API_CALL_FAILURE,
  SEARCH_BLOCK
} from "./blocks-types";

const INITIAL_STATE = {
  blocks: [],
  loading: false,
  searchBlockText: ""
};

const blocksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOCK_API_CALL_START:
      return {
        ...state,
        loading: true
      };
    case BLOCK_API_CALL_SUCCSES:
      return {
        ...state,
        blocks: action.payload,
        loading: false
      };

    case BLOCK_API_CALL_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case SEARCH_BLOCK:
      return {
        ...state,
        searchBlockText: action.payload
      };
    default:
      return state;
  }
};

export default blocksReducer;
