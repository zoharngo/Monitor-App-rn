import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import { BLOCK_API_CALL_START } from "./blocks-types";
import { blocks, blocksMonitor } from "./blocks-data";
import { blockApiCallSuccses, blockApiCallFailure } from "./block-actions";

function* onBlockApiCallStart() {
  try {
    yield delay(1000);
    yield put(blockApiCallSuccses(blocks));
  } catch (error) {
    yield put(blockApiCallFailure(error.message));
  }
}

function* blockApiCallStart() {
  yield takeLatest(BLOCK_API_CALL_START, onBlockApiCallStart);
}

export default function* blocksSaga() {
  yield all([call(blockApiCallStart)]);
}
