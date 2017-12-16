class SkillsController < ApiController
  before_action :set_skill, only: [:show, :skill_users]
  before_action :require_login, only: [:create]

  def index
    @skills = Skill.order(id: :desc)
    render json: @skills
  end

  def show
    render json: @skill
  end

  def create
    @skill = Skill.new skill_params
    if @skill.save
      render json: @skill, status: :created
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  def skill_users
    render json: @skill.users
  end

  private

  def set_skill
    @skill = Skill.find params[:id] || params[:skill_id]
  end

  def skill_params
    params.permit :name
  end
end
