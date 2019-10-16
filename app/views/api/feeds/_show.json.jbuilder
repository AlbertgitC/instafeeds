json.set! feed.id do
  json.extract! feed, :id, :body, :user_id
end
