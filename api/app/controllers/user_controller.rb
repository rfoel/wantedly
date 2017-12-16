class UserController < ApiController
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

  def create_skill
    begin
      if current_user.user_skills.create(skill_params)
        render json: {}, status: :ok
      end
    rescue StandardError => e
      puts e.inspect
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  def destroy_skill
    begin
      skill = current_user.user_skills.find(skill_params[:skill_id])
      if current_user.user_skills.destroy(skill)
        render json: {}, status: :ok
      end
    rescue StandardError => e
      puts e.inspect
      render json: current_user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit :name, :email
  end

  def skill_params
    params.permit :skill_id  
  end
end
