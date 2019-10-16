import { merge } from 'lodash';
import { RECEIVE_FEEDS } from '../actions/feeds_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return merge({}, state, action.feeds);
    default:
      return state;
  }
}