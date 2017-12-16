class UsersController < ApiController
  before_action :set_user, only: [:show]

   def show
    render json: @user
  end

  def create
    @user = User.new user_params
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.select(:id, :name, :email).where(id: params[:id])
  end

  def user_params
    params.permit :name, :email, :password
  end
end
