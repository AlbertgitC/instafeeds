import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FETCHED_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOWING, RECEIVE_UNFOLLOW } from '../actions/follows_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_FETCHED_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_FOLLOWING:
      return merge({}, state, { [action.following.follower_id]: { followedUserIds: action.following.followingArr } });
    case RECEIVE_UNFOLLOW:
      const newState = Object.assign({}, state);
      newState[action.following.follower_id].followedUserIds = action.following.followingArr;
      return newState;
    default:
      return state;
  }
}