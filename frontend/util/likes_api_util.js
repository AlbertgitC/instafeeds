export const likeFeed = (feed_id) => {
  return $.ajax({
    method: "post",
    url: `api/feeds/${feed_id}/likes`,
  });
}

export const unlikeFeed = (feed_id) => {
  return $.ajax({
    method: "delete",
    url: `api/feeds/${feed_id}/likes`
  });
}

export const fetchFeedLikers = (feed_id) => {
  return $.ajax({
    method: "get",
    url: `api/feeds/${feed_id}/likes`,
  });
}