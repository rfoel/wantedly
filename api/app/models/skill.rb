class Skill < ApplicationRecord
  has_many :user_skills
  has_many :users, through: :user_skills

  validates_presence_of :name
  validates :name, uniqueness: true

  def self.find_or_create(name)
    skill =  Skill.find_by_name(name)
    if skill
      skill
    else
      skill = Skill.new
      skill.name = name
      skill.save!
      skill
    end
  end
end
