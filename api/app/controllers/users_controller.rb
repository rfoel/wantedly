class UsersController < ApiController
  before_action :require_login, only: [:endorse, :create_user_skill]  
  before_action :set_user, only: [:show, :user_skills, :create_user_skill]

  def show
    render json: @user
  end

  def autocomplete
    @users = User.where("name ILIKE ?", "%#{params[:term]}%").order(:name)
    json_response(@users, :ok)
  end

  def create
    @user = User.create!(user_params)
    @user.avatar = UiFaces.face
    params[:skills].each do |skill|
      @user.skills << Skill.find_or_create(skill[:name])
    end
    @user.save!
    json_response(@user, :created)
  end

  def user_skills
    user_skills = []
    @user.user_skills.each do |u|
      skill = u.skill.as_json
      skill[:endorsements] = []
      u.endorsements.each do |e|
        endorsement = e.as_json
        endorsement[:endorser] = e.endorser.as_json
        skill[:endorsements] << endorsement
      end
      user_skills.push(skill) 
    end
    json_response(user_skills, :ok)
  end

  def create_user_skill    
    @user.skills << Skill.find_or_create(params[:skill])
    endorse_user_skill @user.user_skills.last, current_user
    json_response(:ok)
  end

  def endorse
    user_skill = UserSkill.find_by_user_id_and_skill_id(params[:user_id], params[:skill_id])
    endorse_user_skill user_skill, current_user
    json_response(:ok)
  end

  def endorse_user_skill user_skill, current_user
    if current_user != user_skill.user
      Endorsement.create(user_skill: user_skill, endorser: current_user)
    end
  end

  private

  def set_user
    @user = User.select(:id, :name, :email, :avatar, :occupation, :location, :bio).where(id: params[:id] || params[:user_id]).first
  end

  def user_params
    params.require(:user).permit :name, :email, :password, :occupation, :location, :bio
  end

  def skill_params
    params.permit :skill_id
  end
end
