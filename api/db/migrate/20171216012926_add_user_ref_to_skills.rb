class AddUserRefToSkills < ActiveRecord::Migration[5.1]
  def change
    add_reference :skills, :user, foreign_key: true
  end
end
