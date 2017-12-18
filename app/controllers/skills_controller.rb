class SkillsController < ApiController
  before_action :set_skill, only: [:show, :skill_users]
  before_action :require_login, only: [:create]

  def index
    @skills = Skill.order(id: :desc)
    json_response(@skills, :ok)
  end

  def show
    json_response(@skill, :ok)
  end

  def create
    @skill = Skill.create!(skill_params)
    json_response(@skill, :created)
  end

  def skill_users
    json_response(@skill.users, :ok)
  end

  private

  def set_skill
    @skill = Skill.find params[:id] || params[:skill_id]
  end

  def skill_params
    params.permit :name
  end
end
