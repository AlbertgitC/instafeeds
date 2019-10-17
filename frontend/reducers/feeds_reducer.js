import { merge } from 'lodash';
import { RECEIVE_FEEDS, RECEIVE_FEED } from '../actions/feeds_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return merge({}, state, action.feeds);
    case RECEIVE_FEED:
      return merge({}, state, action.feed);
    default:
      return state;
  }
}