import * as API from '../util/feeds_api_util';

export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
export const RECEIVE_FEED_ERRORS = "RECEIVE_FEED_ERRORS";

const receiveFeed = (feed) => {
  return {
    type: RECEIVE_FEED,
    feed
  };
}

const receiveFeeds = (feeds) => {
  return {
    type: RECEIVE_FEEDS,
    feeds
  };
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_FEED_ERRORS,
    errors
  };
}

export const createFeed = feed => dispatch => {
  return API.createFeed(feed).then(
    feeds => dispatch(receiveFeeds(feeds)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}

export const fetchFeeds = ids => dispatch => {
  return API.fetchFeeds(ids).then(
    feeds => dispatch(receiveFeeds(feeds))
  );
}

export const fetchFeed = id => dispatch => {
  return API.fetchFeed(id).then(
    feed => dispatch(receiveFeed(feed))
  );
}