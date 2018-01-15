/**
 * TweetsContainer.jsx
 * The containers for tweets, uses masonry layout.
 */
import PropTypes from "prop-types";
import React from "react";
import Tweet from "./Tweet.jsx";

class TweetsContainer extends React.PureComponent {
  render() {
    const tweets = this.props.tweets.map((tweet, i) => {
      return (
        <Tweet
          createdAt={tweet.createdAt}
          key={i}
          text={tweet.text}
          userId={tweet.userId}
        />
      )
    })
    return (
      <div className="tweets-container">
        {tweets}
      </div>
    )
  }
}

TweetsContainer.propTypes = {
  tweets: PropTypes.array,
};

TweetsContainer.defaultProps = {
  tweets: [],
};

export default TweetsContainer;
