class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login!(@user)
      render "api/users/show"
    else
      @errors = ["Login was unsuccessful"]
      render "api/users/errors", status: 500
    end
  end

  def destroy
    if current_user
      @user = current_user
      logout!
      render "api/users/show"
    else
      @errors = ["There is no user logged in"]
      render "api/users/errors", status: 500
    end
  end
end
