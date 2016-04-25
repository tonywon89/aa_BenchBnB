class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params);
    login!(@user)
    @user = current_user
    render :show
  end

  def show
    @user = current_user || nil;
    render :show
  end

end
