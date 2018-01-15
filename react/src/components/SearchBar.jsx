/**
 * SearchBar.jsx
 * A search bar component to render at the top of every page to allow the user
 * to search for tweets matching a query.
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";
import Actions from "../actions";

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSetter = (ref) => this.input = ref;
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.focus();
    }
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }
  handleKeyDown(event) {
    switch (event.key) {
      case "Enter":
        this.handleSearch();
        break;
      case "Escape":
        this.input.blur();
        break;
      default:
        break;
    }
  }
  handleSearch() {
    const query = this.state.value.toLowerCase().trim();
    this.props.searchTweets(query);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div class="search-bar-container">
        <input
          class="search-bar-input"
          type="text"
          ref={this.inputSetter}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button
          class="search-bar-button"
          onClick={this.handleSearch}
        >
          Search
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchTweets: bindActionCreators(Actions.searchTweets, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
