import { compose } from "redux";
import { connect } from "react-redux";
import SearchBoxBase from "../search-box.base.component";
import { searchBlock } from "../../../redux/reducers/blocks/block-actions";

const mapDispatchToProps = dispatch => ({
  searchAction: text => dispatch(searchBlock(text))
});

const SearchBox = compose(connect(null, mapDispatchToProps))(SearchBoxBase);

export default SearchBox;
