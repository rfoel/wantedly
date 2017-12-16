class CreateEndorsements < ActiveRecord::Migration[5.1]
  def change
    create_table :endorsements do |t|
      t.references :user_skills, index: true
      t.references :sender, references: :user, index: true
      t.timestamps
    end
  end
end
