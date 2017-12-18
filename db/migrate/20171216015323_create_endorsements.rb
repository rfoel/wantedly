class CreateEndorsements < ActiveRecord::Migration[5.1]
  def change
    create_table :endorsements do |t|
      t.references :user_skill, index: true
      t.references :endorser, references: :user, index: true
      t.timestamps
    end
  end
end
