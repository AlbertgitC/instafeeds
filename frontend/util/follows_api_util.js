export const followUser = (follow) => {
  return $.ajax({
    method: "post",
    url: `api/users/${follow.followed_id}/follows`,
    data: { follow }
  });
}

export const fetchFollowing = (id) => {
  return $.ajax({
    method: "get",
    url: `api/users/${id}/following`,
  });
}