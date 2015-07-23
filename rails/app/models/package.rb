class Package < ActiveRecord::Base
  belongs_to :user, as: :processor
  belongs_to :user, as: :owner
end
