import { combineReducers } from "redux";
import blocksReducer from "./reducers/blocks/blocks-reducer";
import trapsReducer from "./reducers/traps/traps-reducer";
import lastVisitReducer from "./reducers/modals/last-visit/last-visit-reducer";

const rootReducer = combineReducers({
  blocksReducer: blocksReducer,
  trapsReducer: trapsReducer,
  lastVisitReducer: lastVisitReducer
});

export default rootReducer;
