
if following.length == 0
  json.set! :followedUserIds, []
else
  newFollowing = following.map { |follow| follow.followed_id }
  json.set! :followedUserIds, newFollowing
end

