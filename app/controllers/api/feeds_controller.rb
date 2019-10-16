class Api::FeedsController < ApplicationController

  def create
    new_feed_params = feed_params.except(:user_ids)
    
    feed = current_user.feeds.new(new_feed_params)
    
    if feed.save
      @feeds = Feed.where(:user_id => feed_params[:user_ids]).order("id DESC")
      
      render "api/feeds/index"
    else
      render json: feed.errors.full_messages, status: 422
    end
  end


  def index
    
    @feeds = Feed.where(:user_id => index_params[:ids]).order("id DESC")

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
  def index_params
    params.require(:user_ids).permit(ids:[])
  end

  def feed_params
    params.require(:feed).permit(:body, :photo, user_ids:[])
  end

end