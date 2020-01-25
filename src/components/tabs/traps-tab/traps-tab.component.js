import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { View, FlatList } from "react-native";
import SearchBox from "../../search-box/traps/search-box.component";
import ListItem from "../../list-item/list-item.component";
import styles from "../tabs-style";
import { startTrapsApiCall } from "../../../redux/reducers/traps/traps-actions";
import {
  selectfillterdTraps,
  selectTrapsApiLoadingStatus
} from "../../../redux/reducers/traps/traps-selectors";

const TrapsTab = ({ traps, isLoading, actions: { trapsApiCallStart } }) => {
  useEffect(() => {
    trapsApiCallStart();
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
        data={traps}
        renderItem={({ item: { id, name } }) => (
          <ListItem id={id} title={name} />
        )}
      />
    </View>
  ) : null;
};

const mapStateToProps = state => {
  const {
    trapsReducer: { searchTrapsText }
  } = state;
  return {
    traps: selectfillterdTraps(searchTrapsText)(state),
    isLoading: selectTrapsApiLoadingStatus(state)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    trapsApiCallStart: () => dispatch(startTrapsApiCall())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrapsTab);
