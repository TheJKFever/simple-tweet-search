/**
 * Tweet.jsx
 * A single tweet object.
 */
import * as linkify from 'linkifyjs';
import Actions from "../actions";
import hashtag from "linkifyjs/plugins/hashtag";
import Linkify from 'linkifyjs/react';
import mention from "linkifyjs/plugins/mention";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Add hashtag and mention support to linkify
hashtag(linkify);
mention(linkify);

const MAX_URL_LENGTH = 50;

class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.linkifyOptions = {
      // If the link is a hashtag or a mention, don't actually link to it,
      // instead, prevent event bubbling and dispatch a request for new tweets.
      attributes: (href, type) => {
        if (type === "hashtag" || type === "mention") {
          return {
            onClick: (event) => {
              event.preventDefault();
              this.props.searchTweets(href.substring(1));
            }
          }
        }
      },
      className: "",
      format: {
        url: function(value) {
          if (value.length > MAX_URL_LENGTH) {
            return value.slice(0, MAX_URL_LENGTH) + '…';
          } else {
            return value;
          }
        }
      },
      formatHref: {
        url: function(href) {
          return href;
        }
      }
    }
  }
  render() {
    const createdAt = moment(this.props.createdAt).format(
      "MMMM Do YYYY, h:mm:ss a"
    );
    return (
      <div className="tweet-item" >
        <span class="tweet-handle">{this.props.userId}</span>
        <Linkify
          className="tweet-text"
          tagName="span"
          options={this.linkifyOptions}
        >
          {this.props.text}
        </Linkify>
        <span class="tweet-date">Created at: {createdAt}</span>
      </div>
    )
  }
}

Tweet.propTypes = {
  createdAt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    searchTweets: bindActionCreators(Actions.searchTweets, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Tweet);
