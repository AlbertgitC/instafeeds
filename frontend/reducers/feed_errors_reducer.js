import { RECEIVE_FEED_ERRORS, RECEIVE_FEEDS, RECEIVE_FEED } from '../actions/feeds_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEED_ERRORS:
      return action.errors
    case RECEIVE_FEEDS:
      return [];
    case RECEIVE_FEED:
      return [];
    default:
      return state;
  }
}