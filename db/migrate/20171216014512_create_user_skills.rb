class CreateUserSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :user_skills do |t|
      t.references :user, index: true
      t.references :skill, index: true
    end
  end
end
