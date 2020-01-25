import { createSelector } from "reselect";

const selectTrapsReducer = state => state.trapsReducer;

export const selectTrapsApiLoadingStatus = createSelector(
  [selectTrapsReducer],
  trapsReducer => trapsReducer.loading
);

export const selectTraps = createSelector(
  [selectTrapsReducer],
  trapsReducer => trapsReducer.traps
);

export const selectfillterdTraps = searchTrapText =>
  createSelector([selectTraps], traps =>
    traps.filter(trap => trap.name.includes(searchTrapText))
  );
