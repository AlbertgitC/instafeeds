export const editUser = (user) => {
  return $.ajax({
    method: "patch",
    url: `api/users/${user.id}`,
    data: { user }
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
    data: { filter }
  });
}