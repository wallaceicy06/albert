class User < ActiveRecord::Base
  has_many :packages, foreign_key: :owner_id
end
