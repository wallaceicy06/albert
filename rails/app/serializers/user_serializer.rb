class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :admin, :email
  has_many :packages, embed: :id
end
