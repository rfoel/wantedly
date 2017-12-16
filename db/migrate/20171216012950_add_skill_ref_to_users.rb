class AddSkillRefToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :skill, foreign_key: true
  end
end
