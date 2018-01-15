/**
 * App.js
 * The main application file that renders a search bar and tweet results.
 */
import "./App.css";
import React, { Component } from "react";
import SearchBar from "./components/SearchBar.jsx";
import TweetsContainer from "./components/TweetsContainer.jsx";
import { connect } from "react-redux";

class App extends Component {
  render() {
    let searchBar = <SearchBar/>
    let tweets;
    if (this.props.tweets) {
      tweets = <TweetsContainer
        tweets={this.props.tweets}
      />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Twitter Search</h1>
          {searchBar}
        </header>
        {tweets}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

export default connect(mapStateToProps)(App);
