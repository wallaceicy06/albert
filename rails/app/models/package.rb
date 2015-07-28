class Package < ActiveRecord::Base
  belongs_to :owner, class_name: 'User', foreign_key: :owner_id
  belongs_to :processor, class_name: 'User', foreign_key: :processor_id

  validates :barcode, presence: true, uniqueness: true
  validates :processor, presence: true
  validates :owner, presence: true
  validate :processor_is_admin
  
  def processor_is_admin
    if not processor.admin?
      errors.add(:processor, 'You must be an admin to process packages.')
    end
  end
end
