import { compose } from "redux";
import { connect } from "react-redux";
import SearchBoxBase from "../search-box.base.component";
import { searchTraps } from "../../../redux/reducers/traps/traps-actions";

const mapDispatchToProps = dispatch => ({
  searchAction: text => dispatch(searchTraps(text))
});

const SearchBox = compose(connect(null, mapDispatchToProps))(SearchBoxBase);

export default SearchBox;
