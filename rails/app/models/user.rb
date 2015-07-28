class User < ActiveRecord::Base
  has_many :packages, foreign_key: :owner_id

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true
end
