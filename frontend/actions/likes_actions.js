import * as API from '../util/likes_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_UNLIKE = "RECEIVE_UNLIKE";
export const RECEIVE_LIKERS = "RECEIVE_LIKERS";

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
}

const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
}

const receiveLikers = (likers) => {
  return {
    type: RECEIVE_LIKERS,
    likers
  };
}

const receiveUnlike = (feed_id) => {
  return {
    type: RECEIVE_UNLIKE,
    feed_id: feed_id.feed_id
  };
}


export const likeFeed = feed_id => dispatch => {
  return API.likeFeed(feed_id).then(
    likers => dispatch(receiveLikers(likers))
  );
}

export const unlikeFeed = feed_id => dispatch => {
  return API.unlikeFeed(feed_id).then(
    likers => dispatch(receiveLikers(likers))
  );
}

export const fetchFeedLikers = feed_id => dispatch => {
  return API.fetchFeedLikers(feed_id).then(
    likers => dispatch(receiveLikers(likers))
  );
}
