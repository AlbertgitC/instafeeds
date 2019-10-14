if @following[1].length == 0
  json.set! :follower_id, @following[0]
  json.set! :followingArr, []
else
  json.set! :follower_id, @following[0]
  newFollowing = @following[1].map { |follow| follow.followed_id }
  json.set! :followingArr, newFollowing
end