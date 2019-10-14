if @followers[1].length == 0
  json.set! :followed_id, @followers[0]
  json.set! :followersArr, []
else
  json.set! :followed_id, @followers[0]
  newFollowers = @followers[1].map { |follow| follow.follower_id }
  json.set! :followersArr, newFollowers
end