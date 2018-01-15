/**
 * actions.js
 * Redux actions
 */

const TWEET_SEARCH_API = "api/v1/search/";

// Action types
export const ActionTypes = {
  SET_TWEETS: "SET_TWEETS",
}

/**
 * @desc updates the tweets in redux.
 * @param tweets A list of tweets to update the redux store with.
 */
function setTweets(tweets) {
  return {
    type: ActionTypes.SET_TWEETS,
    payload: {
      tweets
    }
  }
}

/**
 * @desc Fetches a list of tweets for a given search query.
 * @param query A term or phrase to search for related tweets.
 */
function searchTweets(query) {
  return (dispatch) => {
    return fetch(TWEET_SEARCH_API + encodeURI(query))
    .then((response) => {
      return response.json()
    }).then((responseJson) => {
      // TODO: Handle the case where errors are not empty or response is not
      // json parsable
      return responseJson.result;
    }).then((tweets) => {
      dispatch(setTweets(tweets));
    });
  }
}

export default {
  setTweets,
  searchTweets
}
