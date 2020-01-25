import { createSelector } from "reselect";

const selectLastVisitReducer = state => state.lastVisitReducer;

export const selectShowLastVisitModal = createSelector(
  [selectLastVisitReducer],
  lastVisitReducer => lastVisitReducer.show
);

export const selectLastVisitMessageBody = createSelector(
  [selectLastVisitReducer],
  lastVisitReducer => lastVisitReducer.messageBody
);
