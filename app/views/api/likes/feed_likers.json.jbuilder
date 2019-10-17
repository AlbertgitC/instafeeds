if @likes[1].empty?
  json.set! :feed_id, @likes[0]
  json.set! :likerIds, []
else
  newLikerIds = @likes[1].map { |like| like.user_id }
  json.set! :feed_id, @likes[0]
  json.set! :likerIds, newLikerIds
end