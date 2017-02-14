class SessionsController < ApplicationController
  def new
  end

  def create
    # Find a user using the email provided
    @user = User.find_by_email(params[:email])
    # Is there a user?
    # If there is a user, check that the password matches the password_digest
    if @user && @user.authenticate(params[:password])
      # If it does - Yay
      session[:user_id] = @user.id
      redirect_to users_path
      # If it doesn't - Boo, render :new with error messages
    else
      flash[:error] = "Something went wrong yo."
      redirect_to login_path
    end
  end

  def destroy
  end
end
