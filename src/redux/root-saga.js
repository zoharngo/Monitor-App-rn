import { all, call } from "redux-saga/effects";
import blocksSaga from "./reducers/blocks/blocks-saga";
import trapsSaga from "./reducers/traps/traps-saga";

export default function* rootSaga() {
  yield all([call(blocksSaga), call(trapsSaga)]);
}
