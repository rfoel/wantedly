class User < ApplicationRecord
  has_secure_password
  has_secure_token
  has_and_belongs_to_many :skills
  
  validates_presence_of :name, :email, :password_digest
  validates :email, uniqueness: true

  def invalidate_token
    self.update_columns(token: nil)
  end

  def self.valid_login?(email, password)
    user = find_by(email: email)
    if user && user.authenticate(password)
      user
    end
  end
end
