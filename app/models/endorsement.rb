class Endorsement < ApplicationRecord
  belongs_to :endorser, class_name: 'User'
  belongs_to :user_skill

  validates_uniqueness_of :endorser, :scope => :user_skill_id  
end
