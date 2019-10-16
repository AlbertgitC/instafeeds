
@feeds.each do |feed|
  json.partial! "api/feeds/show", feed: feed
end  


