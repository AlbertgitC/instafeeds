import { merge } from 'lodash';
import { RECEIVE_FEEDS, RECEIVE_FEED } from '../actions/feeds_actions';
import { RECEIVE_LIKE, RECEIVE_UNLIKE, RECEIVE_LIKERS } from '../actions/likes_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return merge({}, state, action.feeds);
    case RECEIVE_FEED:      
      return merge({}, state, { [action.feed.id]: action.feed });
    case RECEIVE_LIKERS:      
      let newState = merge({}, state);
      newState[action.likers.feed_id].likerIds = action.likers.likerIds;      
      return newState;
    default:
      return state;
  }
}