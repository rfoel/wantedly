class UserController < ApplicationController
  before_action :require_login  

  def show
    render json: {
      id: current_user.id,
      name: current_user.name,
      email: current_user.email,
      created_at: current_user.created_at,
      updated_at: current_user.updated_at
    }
  end

  def update
    begin
      user = User.find_by_uid user_params[:email]
      if user.update user_params
        render json: current_user
      else
        render json: current_user.errors, status: :unprocessable_entity
      end
    rescue StandardError => e
      puts e.inspect
      render json: {}, status: :not_found
    end
  end

  def destroy
    begin
      user = User.find_by! id: params[:id].to_i
      user.destroy!
      render json: user
    rescue StandardError => e
      puts e.inspect
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  private
  
  def user_params
    params.require(:user).permit :name, :email
  end
end
