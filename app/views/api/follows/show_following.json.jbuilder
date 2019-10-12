
if @following.length == 0
  json.set! :follower_id, current_user.id
  json.set! :followingArr, []
else
  json.extract! @following[0], :follower_id
  newFollowing = @following.map { |follow| follow.followed_id }
  json.set! :followingArr, newFollowing
end

