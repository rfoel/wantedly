class UsersController < ApiController
  before_action :require_login, only: [:endorse]  
  before_action :set_user, only: [:show, :user_skills, :create_skill, :endorse]

   def show
    render json: @user
  end

  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  def user_skills
    json_response(@user.skills, :ok)
  end

  def create_skill
    @user.user_skills.create!(skill_params)
    json_response(:ok)
  end

  def endorse
    user_skill = UserSkill.find_by_user_id_and_skill_id(params[:user_id], params[:skill_id])
    if current_user.id != user_skill.user.id
      Endorsement.create!(user_skill: user_skill, endorser: current_user)
    end
    json_response(:ok)
  end

  private

  def set_user
    @user = User.select(:id, :name, :email).where(id: params[:id] || params[:user_id]).first
  end

  def user_params
    params.permit :name, :email, :password
  end

  def skill_params
    params.permit :skill_id
  end
end
