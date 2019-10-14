class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(follow_params)
    if follow.save
      @following = current_user.following
      render "api/follows/show_following"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = Follow.where("followed_id = #{follow_params[:followed_id]} AND follower_id = #{follow_params[:follower_id]}")[0]
    if follow
      Follow.destroy(follow[:id])
      @following = current_user.following
      render "api/follows/show_following"
    else
      render json: ["User not found"], status: 404
    end
  end

  def followers

  end

  def following
    
    if params[:user_id] == "undefined"
      
      following = current_user.following
      @following = [current_user.id, following]
      render "api/follows/show_following"
      
    elsif params[:follow].nil?
      following = Follow.where("follower_id = #{params[:user_id]}")
      @following = [params[:user_id], following]
      render "api/follows/show_following"
    else
    
      following = Follow.where("follower_id = #{follow_params[:follower_id]}")
      @following = [follow_params[:follower_id], following]
      render "api/follows/show_following"
    end
  end


  private
  def follow_params
    params.require(:follow).permit(:followed_id, :follower_id)
  end

end