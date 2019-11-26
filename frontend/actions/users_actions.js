import * as API from '../util/users_api_util';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_FETCHED_USER = "RECEIVE_FETCHED_USER";
export const RECEIVE_FETCHED_USERS = "RECEIVE_FETCHED_USERS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
}

const receiveFetchedUser = user => {
  return {
    type: RECEIVE_FETCHED_USER,
    user
  };
}

const receiveFetchedUsers = users => {
  return {
    type: RECEIVE_FETCHED_USERS,
    users
  };
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
}

export const editUser = user => dispatch => {
  return API.editUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}

export const fetchUser = id => dispatch => {
  return API.fetchUser(id).then(
    user => dispatch(receiveFetchedUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}

export const fetchUsers = filter => dispatch => {
  return API.fetchUsers(filter).then(
    users => dispatch(receiveFetchedUsers(users)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}

export const searchUsers = filter => {
  return API.searchUsers(filter);
}