import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FETCHED_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, RECEIVE_FOLLOWING } from '../actions/follows_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_FETCHED_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_FOLLOW:
      return merge({}, state, { [action.follow.follower_id]: { followedUserIds: [action.follow.followed_id] } });
    case RECEIVE_FOLLOWING:
      return merge({}, state, { [action.following.follower_id]: { followedUserIds: action.following.followingArr } });
    default:
      return state;
  }
}