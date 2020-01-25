import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, FlatList, ActivityIndicator } from "react-native";
import SearchBox from "../../search-box/traps/search-box.component";
import ListItem from "../../list-item/list-item.component";
import styles from "../tabs-style";
import { startTrapsApiCall } from "../../../redux/reducers/traps/traps-actions";
import {
  selectfillterdTraps,
  selectTrapsApiLoadingStatus
} from "../../../redux/reducers/traps/traps-selectors";
import LastVisitModal from "../../modals/last-visit/last-visit-modal.component";
import { selectShowLastVisitModal } from "../../../redux/reducers/modals/last-visit/last-visit-selector";

const TrapsTab = ({
  traps,
  isLoading,
  showLastVisitModal,
  actions: { trapsApiCallStart }
}) => {
  useEffect(() => {
    trapsApiCallStart();
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
        data={traps}
        renderItem={({ item }) => <ListItem id={item.id} item={item} />}
      />
    </View>
  ) : (
    <View style={[styles.spinnnerContainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    trapsReducer: { searchTrapsText }
  } = state;
  return {
    traps: selectfillterdTraps(searchTrapsText)(state),
    isLoading: selectTrapsApiLoadingStatus(state),
    showLastVisitModal: selectShowLastVisitModal(state)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    trapsApiCallStart: () => dispatch(startTrapsApiCall())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrapsTab);
