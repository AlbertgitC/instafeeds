

if @user.thumbnail.attached?
  json.partial! "api/users/user", user: @user
  json.thumbnailUrl url_for(@user.thumbnail)
else
  json.partial! "api/users/user", user: @user
  json.thumbnailUrl ""
end