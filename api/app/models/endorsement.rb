class Endorsement < ApplicationRecord
  belongs_to :endorser, class_name: 'User'
  belongs_to :user_skill
end
