import {
  BLOCK_API_CALL_START,
  BLOCK_API_CALL_SUCCSES,
  BLOCK_API_CALL_FAILURE,
  SEARCH_BLOCK
} from "./blocks-types";

export const startBlockApiCall = () => ({
  type: BLOCK_API_CALL_START
});

export const blockApiCallSuccses = blocks => ({
  type: BLOCK_API_CALL_SUCCSES,
  payload: blocks
});

export const blockApiCallFailure = message => ({
  type: BLOCK_API_CALL_FAILURE,
  payload: message
});

export const searchBlock = text => ({
  type: SEARCH_BLOCK,
  payload: text
});
