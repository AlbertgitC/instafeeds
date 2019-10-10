import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FETCHED_USER } from '../actions/users_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_FETCHED_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}