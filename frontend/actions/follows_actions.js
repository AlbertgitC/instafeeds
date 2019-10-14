import * as API from '../util/follows_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";

const receiveFollowing = (following) => {
  return {
    type: RECEIVE_FOLLOWING,
    following
  };
}

const receiveUnfollow = (following) => {
  return {
    type: RECEIVE_UNFOLLOW,
    following
  };
}


export const followUser = follow => dispatch => {
  return API.followUser(follow).then(
    following => dispatch(receiveFollowing(following))
  );
}

export const unfollowUser = follow => dispatch => {
  return API.unfollowUser(follow).then(
    following => dispatch(receiveUnfollow(following))
  );
}

export const fetchFollowing = id => dispatch => {
  return API.fetchFollowing(id).then(
    following => dispatch(receiveFollowing(following))
  );
}