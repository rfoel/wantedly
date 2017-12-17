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

  def update_skills
    skills_id = []
    params[:skills].each do |skill|
      skill = Skill.find_or_create(skill[:name])      
      skills_id.push << skill.id
      unless current_user.user_skills.where(skill_id: skill.id).count > 0
        current_user.skills << skill
      end
    end
    
    if skills_id.any?
      current_user.skills.where("skill_id NOT IN (?)", skills_id).each do |skill|
        current_user.skills.destroy(skill)
      end
    else
      current_user.skills.destroy_all
    end
    current_user.save!
    json_response(:ok)    
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
