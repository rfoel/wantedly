class UserSkillsController < ApiController
  before_action :require_login, only: [:create]

  def create
    @user_skill = UserSkill.new user_skill_params
    if @user_skill.save
      render json: @user_skill, status: :created
    else
      render json: @user_skill.errors, status: :unprocessable_entity
    end
  end

  private

  def user_skill_params
    params.permit :user_id, :skill_id
  end
end
