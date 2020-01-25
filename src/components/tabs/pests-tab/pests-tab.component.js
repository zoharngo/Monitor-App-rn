import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import SearchBox from "../../search-box/pests/search-box.component";
import ListItem from "../../list-item/list-item.component";
import styles from "../tabs-style";
import { startBlockApiCall } from "../../../redux/reducers/blocks/block-actions";
import {
  selectfillterdBlocks,
  selectBlocksApiLoadingStatus
} from "../../../redux/reducers/blocks/block-selectors";

const PestsTab = ({ blocks, isLoading, actions: { blockApiCallStart } }) => {
  useEffect(() => {
    blockApiCallStart();
  }, []);

  return !isLoading ? (
    <View style={styles.container}>
      <SearchBox />
      <FlatList
        style={{
          flex: 1,
          width: "100%"
        }}
        keyExtractor={(item, index) => index.toString()}
        data={blocks}
        renderItem={({ item: { id, name } }) => (
          <ListItem id={id} title={name} bell />
        )}
      />
    </View>
  ) : null;
};

const mapStateToProps = state => {
  const {
    blocksReducer: { searchBlockText }
  } = state;
  return {
    blocks: selectfillterdBlocks(searchBlockText)(state),
    isLoading: selectBlocksApiLoadingStatus(state)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    blockApiCallStart: () => dispatch(startBlockApiCall())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PestsTab);
