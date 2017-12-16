class UserSkill < ApplicationRecord
  belongs_to :user
  belongs_to :skill
  has_many :endorsements

  validates_presence_of :user, :skill  
  validates_uniqueness_of :user_id, :scope => :skill_id  
end
