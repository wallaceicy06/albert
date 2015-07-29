class User < ActiveRecord::Base
  has_many :packages, foreign_key: :owner_id

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true

  def new_packages
    return self.packages.where({picked_up: false})
  end

  def has_new_packages?
    return (self.new_packages.size > 0)
  end
end
