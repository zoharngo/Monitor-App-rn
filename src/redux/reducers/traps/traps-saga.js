import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import { TRAPS_API_CALL_START } from "./traps-types";
import traps from "./traps-data";
import { trapsApiCallSuccses, trapsApiCallFailure } from "./traps-actions";

function* onTrapsApiCallStart() {
  try {
    yield delay(1000);
    yield put(trapsApiCallSuccses(traps));
  } catch (error) {
    yield put(trapsApiCallFailure(error.message));
  }
}

function* trapsApiCallStart() {
  yield takeLatest(TRAPS_API_CALL_START, onTrapsApiCallStart);
}

export default function* trapsSaga() {
  yield all([call(trapsApiCallStart)]);
}
