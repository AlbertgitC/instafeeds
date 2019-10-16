
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

  def index
    
    @users = User.where(id: fetch_users_params[:ids])
    
    if @users
      render "api/users/index"
    else
      render json: ["Users not found"], status: 404
    end
  end

  def update
    
    if user_password_params[:formType] == "editPassword"
      
      @user = User.find_by_credentials(
        user_password_params[:user][:username],
        user_password_params[:user][:password]
      )

      if !@user
        return render json: ["Invalid credentials"], status: 401
      elsif user_password_params[:user][:new_password] != user_password_params[:user][:new_password2]
        return render json: ["New password does not match confirm password"], status: 422
      end

      
      @user.password = user_password_params[:user][:new_password]
      
      

      if @user.save
        render "api/users/show"      
      else
        render json: @user.errors.full_messages, status: 422
      end
    elsif user_params[:formType] == "editInfo"
      
      @user = current_user
      new_user_params = user_params[:user]
      
      if @user.update(new_user_params)
        render "api/users/show"      
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private
  def user_params
    params.require(:user).permit({:user => [:username, :email, :website, :bio]}, :formType)
  end
  def user_password_params
    params.require(:user).permit({:user => [:username, :password, :new_password, :new_password2]}, :formType)
  end
  def create_user_params
    params.require(:user).permit(:username, :password, :email)
  end
  def fetch_users_params
    params.require(:filter).permit(ids:[])
  end
end
