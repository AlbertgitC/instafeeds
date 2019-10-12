class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render "api/follows/add"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
   
  end

  def followers

  end

  def following
    @following = current_user.following
    render "api/follows/show_following"
  end


  private
  def follow_params
    params.require(:follow).permit(:followed_id, :follower_id)
  end

end