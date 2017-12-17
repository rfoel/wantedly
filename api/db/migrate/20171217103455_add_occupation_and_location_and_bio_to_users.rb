class AddOccupationAndLocationAndBioToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :occupation, :string
    add_column :users, :location, :string
    add_column :users, :bio, :string    
  end
end
