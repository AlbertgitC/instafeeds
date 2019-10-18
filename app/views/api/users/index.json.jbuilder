
@users.each do |user|
  if user.thumbnail.attached?
    json.set! user.id do
      json.partial! "api/users/user", user: user
      json.thumbnailUrl url_for(user.thumbnail)
    end
  else
    json.set! user.id do
      json.partial! "api/users/user", user: user
      json.thumbnailUrl ""
    end
  end
end
