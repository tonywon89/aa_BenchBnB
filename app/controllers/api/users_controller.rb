class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params);
    login!(@user)
    @user = current_user
    render :show
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

end
