export const editUser = (user) => {
  
  return $.ajax({
    method: "patch",
    url: `api/users/${user.get(user.id)}`,
    data: user,
    contentType: false,
    processData: false
  });
}

export const fetchUser = (id) => {
  return $.ajax({
    method: "get",
    url: `api/users/${id}`
  });
}

export const fetchUsers = (filter) => {
  return $.ajax({
    method: "get",
    url: "api/users",
    data: filter
  });
}

export const searchUsers = (filter) => {
  return $.ajax({
    method: "get",
    url: "api/search",
    data: filter
  });
}