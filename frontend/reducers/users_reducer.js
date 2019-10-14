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
    case RECEIVE_FOLLOWING:
      const prevState = Object.assign({}, state);
      return merge({}, prevState, { [action.following.follower_id]: { followedUserIds: action.following.followingArr } });
    default:
      return state;
  }
}