/**
 * reducers.js
 * Redux reducers
 */

import { ActionTypes } from "./actions";

const INITIAL_STATE = {
  tweets: []
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_TWEETS:
      const tweets = action.payload.tweets;
      return { tweets };
    default:
      return state;
  }
}
