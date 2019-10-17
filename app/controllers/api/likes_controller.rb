class Api::LikesController < ApplicationController

  def create
    like_params = {
      user_id: current_user.id,
      likeable_id: params[:feed_id],
      likeable_type: :Feed 
    }
    like = Like.new(like_params)
    if like.save
      likes = Like.where("likeable_id = ? AND likeable_type = ?", params[:feed_id], :Feed)
      @likes = [params[:feed_id], likes]
      render "api/likes/feed_likers"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy    
    like = Like.where("user_id = ? AND likeable_id = ? AND likeable_type = ?", current_user.id, params[:feed_id], :Feed)[0]

    if like
      Like.destroy(like[:id])
      
      likes = Like.where("likeable_id = ? AND likeable_type = ?", params[:feed_id], :Feed)
      @likes = [params[:feed_id], likes]
      render "api/likes/feed_likers"
    else
      render json: ["Like not found"], status: 404
    end
  end

  def index
    likes = Like.where("likeable_id = ? AND likeable_type = ?", params[:feed_id], :Feed)
    @likes = [params[:feed_id], likes]
    render "api/likes/feed_likers"
  end

  private

  # def like_params
  #   params.require(:like).permit()
  # end

end