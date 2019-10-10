import * as API from '../util/users_api_util';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_FETCHED_USER = "RECEIVE_FETCHED_USER";

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