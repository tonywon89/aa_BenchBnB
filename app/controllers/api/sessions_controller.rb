class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(nickname, password)

    if user
      login!(@user)
      render "api/users#show"
    end
  end

  def destroy
    logout!
  end
end
