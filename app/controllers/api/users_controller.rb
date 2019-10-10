
class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def show
    
    @user = User.find_by(id: params[:id])
    if @user
      render "api/users/show"
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if !@user
      render json: ["Invalid username or password"], status: 401
      return
    end


    new_user_params = user_params
    new_user_params[:password] = user_params[:new_password]
    new_user_params.delete("new_password")
    clone_user = User.new(new_user_params)
    

    if @user.update(password_digest: clone_user.password_digest)
      render "api/users/show"      
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :new_password)
  end
end
