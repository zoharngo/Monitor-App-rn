import { createSelector } from "reselect";

const selectBlocksReducer = state => state.blocksReducer;

export const selectBlocksApiLoadingStatus = createSelector(
  [selectBlocksReducer],
  blocksReducer => blocksReducer.loading
);

export const selectBlocks = createSelector(
  [selectBlocksReducer],
  blocksReducer => blocksReducer.blocks
);

export const selectfillterdBlocks = searchTrapText =>
  createSelector([selectBlocks], blocks =>
    blocks.filter(block => block.name.includes(searchTrapText))
  );
