class UserController < ApiController
  before_action :require_login

  def show
    json_response(current_user, :ok)    
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
    user = User.find_by! id: params[:id].to_i
    user.destroy!
    json_response(:ok)
  end

  def skills
    user_skills = []
    current_user.user_skills.each do |user_skill|
      skill = user_skill.skill.as_json
      skill[:endorsements] = user_skill.endorsements.as_json
      user_skills.push(skill) 
    end
    json_response(user_skills, :ok)
  end

  def create_skill
    current_user.user_skills.create(skill_params)
    json_response(:ok)
  end

  def destroy_skill
    skill = current_user.user_skills.find!(skill_params[:skill_id])
    current_user.user_skills.destroy!(skill)
    json_response(:ok)
  end

  private

  def user_params
    params.permit :name, :email
  end

  def skill_params
    params.permit :skill_id
  end
end
