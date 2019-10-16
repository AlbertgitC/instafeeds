json.set! feed.id do
  if feed.photo.attached?
    json.extract! feed, :id, :body, :user_id
    json.photoUrl url_for(feed.photo)
  else
    json.extract! feed, :id, :body, :user_id
    json.photoUrl ""
  end
end
