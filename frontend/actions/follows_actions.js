import * as API from '../util/follows_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";

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

const receiveFollowers = (followers) => {
  return {
    type: RECEIVE_FOLLOWERS,
    followers
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

export const fetchFollowers = id => dispatch => {
  return API.fetchFollowers(id).then(
    followers => dispatch(receiveFollowers(followers))
  );
}