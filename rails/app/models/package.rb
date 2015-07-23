class Package < ActiveRecord::Base
  belongs_to :user, as: :processor
  belongs_to :user, as: :owner

  validates :time_checkin, presence: true
  validates :barcode, presence: true, uniqueness: true
  validates :processor, presence: true
  validates :owner, presence: true
  
  # TODO: cusotm validation for admins processor
end
