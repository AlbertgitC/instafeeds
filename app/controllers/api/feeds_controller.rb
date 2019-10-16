class Api::FeedsController < ApplicationController

  def create
    feed = Feed.new(feed_params)
    if feed.save
      @feeds = Feed.where(:user_id => feed_params[:user_ids])
      render "api/feeds/index"
    else
      render json: feed.errors.full_messages, status: 422
    end
  end


  def index
    
    @feeds = Feed.where(:user_id => params[:user_ids])

    if !@feeds.empty?
      render "api/feeds/index"
    else
      render json: ["Feeds not found"], status: 404
    end
  end

  def show
    @feed = Feed.find(feed_params[:id])
    if @feed
      render "api/feeds/show"
    else
      render json: ["Feed not found"], status: 404
    end
  end

  def update
    @feed = Feed.find(feed_params[:id])
    if !@feed
      render json: ["Feed not found"], status: 404
    elsif @feed.update(feed_params)
      render "api/feeds/show"
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def destroy
    feed = Feed.find(params[:id])
    if !feed
      render json: ["Feed not found"], status: 404
    else
      Feed.destroy(feed.id)
      render "api/feeds/index"
    end
  end


  private
  def feeds_params
    params.require(:feeds).permit(:user_ids)
  end

  def feed_params
    params.require(:feed).permit(:user_id, :body, :user_ids)
  end

end