
class Api::UsersController < ApplicationController
  def create
    @user = User.new(create_user_params)
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
    
    if user_password_params[:password] != ""
      
      @user = User.find_by_credentials(
        user_password_params[:username],
        user_password_params[:password]
      )

      if !@user
        render json: ["Invalid username or password"], status: 401
        return
      end

      
      @user.password = user_password_params[:new_password]
      
      

      if @user.save
        render "api/users/show"      
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      @user = current_user
      new_user_params = user_params
  
      if @user.update(new_user_params)
        render "api/users/show"      
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :website, :bio)
  end
  def user_password_params
    params.require(:user).permit(:username, :password, :new_password)
  end
  def create_user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
