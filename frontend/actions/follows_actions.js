import * as API from '../util/follows_api_util';


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";

const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
}

const receiveFollowing = (following) => {
  return {
    type: RECEIVE_FOLLOWING,
    following
  };
}


export const followUser = follow => dispatch => {
  return API.followUser(follow).then(
    follow => dispatch(receiveFollow(follow))
  );
}

export const fetchFollowing = id => dispatch => {
  return API.fetchFollowing(id).then(
    following => dispatch(receiveFollowing(following))
  );
}