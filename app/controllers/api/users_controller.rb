class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params);
    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render :errors, status: 500
    end
  end

  def show
    @user = current_user
    if @user
      render :show
    else
      @errors = ["There is no current user"]
      render :errors, status: 500
    end
  end

  def destroy
    @user = User.find_by(id: params[:id]);

    if @user
      @user.destroy
      render :show
    else
      @errors = ["There is no such user with id #{params[:id]}"]
      render :errors, status: 500
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
