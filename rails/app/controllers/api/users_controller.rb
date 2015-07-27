class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    if @user
      render json: @user, status: :ok
    else
      render json: {}, status: :not_found
    end
  end

  def index
    render json: User.all
  end
end
