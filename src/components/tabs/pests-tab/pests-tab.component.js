import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, FlatList, ActivityIndicator } from "react-native";
import SearchBox from "../../search-box/pests/search-box.component";
import ListItem from "../../list-item/list-item.component";
import styles from "../tabs-style";
import { startBlockApiCall } from "../../../redux/reducers/blocks/block-actions";
import {
  selectfillterdBlocks,
  selectBlocksApiLoadingStatus
} from "../../../redux/reducers/blocks/block-selectors";
import LastVisitModal from "../../modals/last-visit/last-visit-modal.component";
import { selectShowLastVisitModal } from "../../../redux/reducers/modals/last-visit/last-visit-selector";

const PestsTab = ({
  blocks,
  isLoading,
  showLastVisitModal,
  actions: { blockApiCallStart }
}) => {
  useEffect(() => {
    blockApiCallStart();
  }, []);

  return !isLoading ? (
    <View style={styles.container}>
      <SearchBox />
      {showLastVisitModal ? <LastVisitModal title="Last Visit" /> : null}
      <FlatList
        style={{
          flex: 1,
          width: "100%"
        }}
        keyExtractor={(item, index) => index.toString()}
        data={blocks}
        renderItem={({ item }) => <ListItem id={item.id} item={item} bell />}
      />
    </View>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    blocksReducer: { searchBlockText }
  } = state;
  return {
    blocks: selectfillterdBlocks(searchBlockText)(state),
    isLoading: selectBlocksApiLoadingStatus(state),
    showLastVisitModal: selectShowLastVisitModal(state)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    blockApiCallStart: () => dispatch(startBlockApiCall())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PestsTab);
