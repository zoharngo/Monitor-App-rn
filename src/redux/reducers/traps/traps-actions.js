import {
  TRAPS_API_CALL_START,
  TRAPS_API_CALL_SUCCSES,
  TRAPS_API_CALL_FAILURE,
  SEARCH_TRAPS
} from "./traps-types";

export const startTrapsApiCall = () => ({
  type: TRAPS_API_CALL_START
});

export const trapsApiCallSuccses = traps => ({
  type: TRAPS_API_CALL_SUCCSES,
  payload: traps
});

export const trapsApiCallFailure = message => ({
  type: TRAPS_API_CALL_FAILURE,
  payload: message
});

export const searchTraps = text => ({
  type: SEARCH_TRAPS,
  payload: text
});
