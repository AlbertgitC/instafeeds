export const createFeed = (feed) => {
  return $.ajax({
    method: "post",
    url: "api/feeds",
    data: feed,
    contentType: false,
    processData: false 
  });
}

export const deleteFeed = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/feeds/${id}`
  });
}

export const fetchFeeds = (user_ids) => {
  return $.ajax({
    method: "get",
    url: "api/feeds",
    data: { user_ids }
  });
}

export const fetchFeed = (id) => {
  return $.ajax({
    method: "get",
    url: `api/feeds/${id}`
  });
}

export const editFeed = (feed) => {
  return $.ajax({
    method: "patch",
    url: `api/feeds/${feed.id}`,
    data: {feed}
  });
}